def unique_values(arr):
    # Use a set to store unique values
    unique_set = set()
    unique_list = []

    for num in arr:
        if num not in unique_set:
            unique_set.add(num)
            unique_list.append(num)

    return unique_list

# Taking user input
user_input = input("Enter a list of integers separated by spaces: ")
input_array = list(map(int, user_input.split()))

# Getting the unique values
result = unique_values(input_array)
print(f"Unique values: {result}")
