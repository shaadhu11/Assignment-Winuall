def is_palindrome(s: str) -> bool:
    # Normalize the string by converting it to lowercase and removing non-alphanumeric characters
    normalized_str = ''.join(char.lower() for char in s if char.isalnum())
    
    # Check if the normalized string is equal to its reverse
    return normalized_str == normalized_str[::-1]

# Taking user input
user_input = input("Enter a string to check if it's a palindrome: ")

# Checking if the input string is a palindrome
if is_palindrome(user_input):
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
