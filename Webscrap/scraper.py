import requests
from bs4 import BeautifulSoup
import csv

# URL of the website to scrape
url = 'http://books.toscrape.com/'

# Send a GET request to the URL
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Find the container that holds the books
    books_container = soup.find('ol', class_='row')

    # Find all the books within the container
    books = books_container.find_all('li')

    # Open a CSV file to write the data
    with open('books.csv', mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Title', 'Author', 'Price'])

        # Iterate over each book and extract the necessary information
        for book in books:
            title = book.find('h3').find('a')['title']
            price = book.find('p', class_='price_color').text

            # Since the author is not directly available, we need to click into the book's page to get the author
            book_url = book.find('h3').find('a')['href']
            book_page_url = url + book_url
            book_response = requests.get(book_page_url)
            book_soup = BeautifulSoup(book_response.content, 'html.parser')
            author = book_soup.find('ul', class_='breadcrumb').find_all('li')[2].text.strip()

            # Write the book data to the CSV file
            writer.writerow([title, author, price])

    print('Data has been written to books.csv')
else:
    print('Failed to retrieve the webpage.')
