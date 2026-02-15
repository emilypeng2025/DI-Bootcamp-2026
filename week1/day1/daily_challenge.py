# 👩‍🏫 👩🏿‍🏫 What You’ll learn
# Python Basics
# Conditionals
# Loops


# Instructions:
# 1. Ask for User Input:

# The string must be exactly 10 characters long.
# 2. Check the Length of the String:

# If the string is less than 10 characters, print: "String not long enough."
# If the string is more than 10 characters, print: "String too long."
# If the string is exactly 10 characters, print: "Perfect string" and proceed to the next steps.
# 3. Print the First and Last Characters:

# Once the string is validated, print the first and last characters.
# 4. Build the String Character by Character:

# Using a for loop, construct and print the string character by character. Start with the first character, then the first two characters, and so on, until the entire string is printed.
# Hint: You can create a loop that goes through the string, adding one character at a time, and print it progressively.

# Example:

# Alt text

# 5. Bonus: Jumble the String (Optional)

# As a bonus, try shuffling the characters in the string and print the newly jumbled string.
# Hint: You can use the random.shuffle function to shuffle a list of characters.

import random

ten_characters = str(input("Please type in 10 characters: "))

if len(ten_characters) < 10:
    print("The string is too short")
elif len(ten_characters) > 10:
    print("The string is too long")
else:
    print("Perfect string.")

    print("First character:", ten_characters[0])
    print("Last character:", ten_characters[-1])

# for loop to range from the first character to the last
for i in range(len(ten_characters)):
    print(ten_characters[0:i+1])

#bonus: jumble the string

#made the characters seperated by using list for each character
character_list = list(ten_characters)
random.shuffle(character_list)
jumbled = " ".join(character_list)
print("\nJumbled string:", jumbled)