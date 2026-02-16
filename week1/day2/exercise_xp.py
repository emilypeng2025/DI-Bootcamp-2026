# 👩‍🏫 👩🏿‍🏫 What You’ll learn
# Sequence
# List
# Set
# Tuple


# 🌟 Exercise 1: Favorite Numbers
# Key Python Topics:

# Sets
# Adding/removing items in a set
# Set concatenation (using union)

# Instructions:
# Create a set called my_fav_numbers and populate it with your favorite numbers.
# Add two new numbers to the set.
# Remove the last number you added to the set.
# Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
# Note: Sets are unordered collections, so ensure no duplicate numbers are added.

# Create a set called my_fav_numbers and populate it with your favorite numbers.
my_fav_numbers = {2, 3, 6, 7}
# print(my_fav_numbers)
# another way is to: use .set() function to put my_fav_numbers = set([2, 3, 6, 7])
# my_fav_numbers = set([2, 3, 6, 7])

# Add two new numbers to the set.
two_numbers = {8, 9}
my_fav_numbers.update(two_numbers)
print(my_fav_numbers)
# sets cannot support +, so the two ways of concatenation: .add() can only add one number a time; add set by using .update()


# Remove the last number you added to the set.
my_fav_numbers.remove(9)
print(my_fav_numbers)
# Since sets are unordered, there is no “last element”.
# So I manually removed 9.

# Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
friend_fav_numbers = {1, 4, 5}

# Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
# Note: Sets are unordered collections, so ensure no duplicate numbers are added.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# Alternative:
# our_fav_numbers = my_fav_numbers | friend_fav_numbers
print(our_fav_numbers)


# 🌟 Exercise 2: Tuple
# Key Python Topics:

# Tuples (immutability)


# Instructions:

# Given a tuple of integers, try to add more integers to the tuple.
# Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple.

my_tuple = (1, 2, 4, 5)
y = list(my_tuple)
y.append(6)
y.append(9)
my_tuple = tuple(y)
print(my_tuple)

# anther method: change the tuple to a new tuple: instead of adding to it, create anther new my_tuple.
# my_tuple = (1, 2, 4, 5)
# my_tuple = my_tuple + (6, 9)
# print(my_tuple)

# Think about why you can’t add more integers to a tuple.
# Answer: 
# Tuples are designed this way to make them more efficient and safer.
# Since their contents cannot change, Python can optimize memory usage and performance.
# If you need a data structure that allows adding or removing elements, you should use a list instead.
# If a tuple is modified, it actually creates a new tuple rather than changing the original one.
# 这样设计的原因是：•	更安全（数据不会被意外修改）•	更高效（内存优化）•	可以作为字典的 key





# 🌟 Exercise 3: List Manipulation
# Key Python Topics:

# Lists
# List methods: append, remove, insert, count, clear


# Instructions:

# You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# Remove "Banana" from the list.
# Remove "Blueberries" from the list.
# Add "Kiwi" to the end of the list.
# Add "Apples" to the beginning of the list.
# Count how many times "Apples" appear in the list.
# Empty the list.
# Print the final state of the list.

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
print(basket)
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket)
print(basket.count("Apples"))

# Empty the list.
basket.clear()

# Print the final state of the list.
print(basket) #[]


# 🌟 Exercise 4: Floats
# Key Python Topics:

# Lists
# Floats and integers
# Range generation


# Instructions:

# Recap: What is a float? What’s the difference between a float and an integer?
# Answer: a float is a number with digits ".", an integer is a whole number without the digits. 
# A float is a number that contains a decimal part.
# An integer is a whole number without any decimal part.

# Create a list containing the following sequence of mixed types: floats and integers:
# 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
# Avoid hard-coding each number manually.
# Think: Can you generate this sequence using a loop or another method?

# 1.5= 0.5 * 3, 5 = 0.5 * 10
number_list = []
for i in range (3, 11):
    numbers = 0.5 * i
    number_list.append(numbers)
print(number_list)

#more clean version:
number_list = [0.5 * i for i in range (3, 11)]
print(number_list)

# 🌟 Exercise 5: For Loop
# Key Python Topics:

# Loops (for)
# Range and indexing


# Instructions:

# Write a for loop to print all numbers from 1 to 20, inclusive.


for numbers in range(1, 21):
    print(numbers) 

# Write another for loop that prints every number from 1 to 20 where the index is even.
for index, number in enumerate(range(1, 21)):
    if index % 2 == 0:
        print(number) 

#or use step by 2:
for number in range(2, 21, 2):
    print(number)


# 🌟 Exercise 6: While Loop
# Key Python Topics:

# Loops (while)
# Conditionals


# Instructions:

# Use an input to ask the user to enter their name.
# Using a while True loop, check if the user gave a proper name (not digits and at least 3 letters long)
# hint: check for the method isdigit()
# if the input is incorrect, keep asking for the correct input until it is correct
# if the input is correct print “thank you” and break the loop
# Example:

# Alt text


while True:
    user = input("Enter your name: ")
    if user.isdigit():
        print("Sorry, no digits.")
    elif len(user) < 3:
        print("Sorry, name is too short.")
    else:
        print("Thank you")
        break

# 🌟 Exercise 7: Favorite Fruits
# Key Python Topics:

# Input/output
# Strings and lists
# Conditionals


# Instructions:

# Ask the user to input their favorite fruits (they can input several fruits, separated by spaces).
# Store these fruits in a list.
# Ask the user to input the name of any fruit.
# If the fruit is in their list of favorite fruits, print:
# "You chose one of your favorite fruits! Enjoy!"
# If not, print:
# "You chose a new fruit. I hope you enjoy it!"

fruits_input = input("Enter your favorite fruits: ")

# if user seperate each fruit with comma, replace the comma with a space, then plit into list
yummy_fruits = fruits_input.replace(",", " ").split()

# Ask for another fruit, then check if it is in the yummy fruit lists:
fruits_choice = input("Enter the name of any fruit: ")
if fruits_choice.lower() in [fruit.lower() for fruit in yummy_fruits]:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

# analysis: now i need two lists: 1. the collection 
# 2. compare if input items are in the list, 
# if they are, no need to add(so better to use tuple?)
# if they are not, append to the list of collection of fruits



# 🌟 Exercise 8: Pizza Toppings
# Key Python Topics:

# Loops
# Lists
# String formatting


# Instructions:

# Write a loop that asks the user to enter pizza toppings one by one.
# Stop the loop when the user types 'quit'.
# For each topping entered, print:
# "Adding [topping] to your pizza."
# After exiting the loop, print all the toppings and the total cost of the pizza.
# The base price is $10, and each topping adds $2.50.


pizza_toppings = []

while True:
    toppings = input('What pizza topping do you want: (write "quit" if you finished)')
    
    if toppings == "quit":
        break

    pizza_toppings.append(toppings)
    print(f"Adding {toppings} to your pizza.")

print(f"What you ordered on the pizza: {pizza_toppings}")
    
total_price = 10 + len(pizza_toppings) * 2.5
print(f"Total price: ${total_price}")

# 🌟 Exercise 9: Cinemax Tickets
# Key Python Topics:

# Conditionals
# Lists
# Loops


# Instructions:

# Ask for the age of each person in a family who wants to buy a movie ticket.
# Calculate the total cost based on the following rules:
# Free for people under 3.
# $10 for people aged 3 to 12.
# $15 for anyone over 12.
# Print the total ticket cost.

age_input = input("Movies for the family! write down ages seperated by space: ")

age_list = [int(age) for age in age_input.split()]

# half_price_count = 0
# full_price_count = 0

# for i in age_list:
#     if 3 < i <= 12:
#         half_price_count += 1
#     elif i > 12:
#         full_price_count += 1
# to make it easier: no need to count and do multiplication, just add each number that falls in the two groups:
# total_price_family = half_price_count * 10 + full_price_count * 15

total_price_family = 0

for age in age_list:
    if 3 < age <= 12:
        total_price_family += 10
    elif age > 12:
        total_price_family += 15

print(f"Thank you for purchasing movie tickets. The total cost is ${total_price_family}.")

# Bonus:

# Imagine a group of teenagers wants to see a restricted movie (only for ages 16–21).
# Write a program to:
# Ask for each person’s age.
# Remove anyone who isn’t allowed to watch.
# Print the final list of attendees.

ages_input = input("Enter ages separated by space: ")
age_list = [int(age) for age in ages_input.split()]

allowed_attendees = []
for age in age_list:
    if 16 <= age <= 21:
        allowed_attendees.append(age)

print("Final list of attendees:", allowed_attendees)