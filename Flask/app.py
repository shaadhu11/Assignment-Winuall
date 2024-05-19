
from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory database
books = []

# Helper function to find a book by ID
def find_book(book_id):
    for book in books:
        if book['id'] == book_id:
            return book
    return None

# Routes

# Get all books
@app.route('/books', methods=['GET'])
def get_books():
    return jsonify(books)

# Get a single book by ID
@app.route('/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = find_book(book_id)
    if book is None:
        return jsonify({'error': 'Book not found'}), 404
    return jsonify(book)

# Add a new book
@app.route('/books', methods=['POST'])
def add_book():
    new_book = request.json
    new_book['id'] = len(books) + 1
    books.append(new_book)
    return jsonify(new_book), 201

# Update an existing book
@app.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    book = find_book(book_id)
    if book is None:
        return jsonify({'error': 'Book not found'}), 404

    data = request.json
    book.update(data)
    return jsonify(book)

# Delete a book
@app.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    book = find_book(book_id)
    if book is None:
        return jsonify({'error': 'Book not found'}), 404

    books.remove(book)
    return jsonify({'message': 'Book deleted successfully'})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
