import random

# Create an empty list to store the random numbers
random_number_list = []

# Generate and append 50 random numbers between 1 and 100 to the list
for _ in range(50):
    random_number = random.randint(1, 100)
    random_number_list.append(random_number)

print(random_number_list)