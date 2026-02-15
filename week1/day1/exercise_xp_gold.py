# What we will learn:
# Python Basics
# Python Data type


# Exercise 1 : Hello World-I love Python
# Instructions
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python

print("Hello world\n" * 4 + "I love python\n" * 4)

# Exercise 2 : What is the Season ?
# Instructions
# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

month = int(input("Choose a month from 1 to 12: "))
if 3 <= month <= 5:
    print("It's Spring. Spring runs from March (3) to May (5)")
elif 6 <= month <= 8:
    print("It's Summer. Summer runs from June (6) to August (8)")
elif 9 <= month <= 11:
    print("It's Autumn. Autumn runs from September (9) to November (11)")
elif month in (12, 1, 2):
    print("It's Winter. Winter runs from December (12) to February (2)")
else:
    print("Invalid month. Please choose a number between 1 and 12.")   