def factorial(n: int) -> int:
    # Base case: factorial of 0 or 1 is 1
    if n == 0 or n == 1:
        return 1
    # Recursive case: n! = n * (n-1)!
    else:
        return n * factorial(n - 1)

# Taking user input
user_input = int(input("Enter a number to calculate its factorial: "))

# Checking if the input is a non-negative integer
if user_input < 0:
    print("Factorial is not defined for negative numbers.")
else:
    result = factorial(user_input)
    print(f"The factorial of {user_input} is {result}.")
