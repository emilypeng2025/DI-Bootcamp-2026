# 👩‍🏫 👩🏿‍🏫 What You’ll learn
# Python Basics
# Loops
# Lists
# Strings


# Challenge 1: Multiples of a Number


# Key Python Topics:
# input() function
# Loops (for or while)
# Lists and appending items
# Basic arithmetic (multiplication)


# Instructions:
# 1. Ask the user for two inputs:

# A number (integer).
# A length (integer).
# 2. Create a program that generates a list of multiples of the given number.
# 3. The list should stop when it reaches the length specified by the user.

# Example 1:

# Input:

# number: 7
# length: 5
# Output:
# [7, 14, 21, 28, 35]



# Example 2:

# Input:

# number: 12
# length: 10
# Output:
# [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]



# Example 3:

# Input:

# number: 17
# length: 6
# Output:
# [17, 34, 51, 68, 85, 102]


beginning_number = int(input("Give a number that is an integer: "))
length = int(input("Give a number that is an integer, as the length of the list: "))

# the_list = []

# for i in range(1, length + 1): #why use range? 
#     # the numbers began from 1 till i, but range doesnt include the last one so "i + 1" 
#     #[beginning_number * 1, beginning_number * 2, ...., beginning_number * length]

#     the_list.append(beginning_number * i)

the_list = [beginning_number * i for i in range(1, length + 1)] 
# why use for loop instead of while loop?  	•	你已经知道循环次数（length）for 循环比 while 更适合, while True 是用于“不知道循环次数”的情况。
# why use range?  range() 是一个用来生成一系列数字的工具。它通常和 for 循环一起使用。 1 parameter: range(stop) 2. range(start, stop) 3. range(start, stop, step)  🟢 为什么经常看到 length + 1？range 是“左闭右开” 包含 start 不包含 stop🟢 range 不会真的生成列表 print(list(range(5)))
print(the_list)



# Challenge 2: Remove Consecutive Duplicate Letters


# Key Python Topics:
# input() function
# Strings and string manipulation
# Loops (for or while)
# Conditional statements (if)


# Instructions:
# 1. Ask the user for a string.
# 2. Write a program that processes the string to remove consecutive duplicate letters.

# The new string should only contain unique consecutive letters.
# For example, “ppoeemm” should become “poem” (removes consecutive duplicates like ‘pp’, ‘ee’, and ‘mm’).
# 3. The program should print the modified string.



# Example 1:

# Input:
# user’s word: "ppoeemm"
# Output:
# "poem"


# Example 2:

# Input:
# user’s word: "wiiiinnnnd"
# Output:
# "wind"


# Example 3:

# Input:
# user’s word: "ttiiitllleeee"
# Output:
# "title"


# Example 4:

# Input:
# user’s word: "cccccaaarrrbbonnnnn"
# Output:
# "carbon"


# Notes:
# The final string will not include any consecutive duplicates, but non-consecutive duplicates are allowed.
# Example: In "recursive", the two ‘r’s and two ‘e’s are allowed because they are not consecutive.


user_word = input("Write a string: ")
result = ""
for i, letter in enumerate(user_word):
    #compare the index and its +-1 position letters, if two are the same letter, get rid of one of them
    #use emumerate #enumerate() 是一个函数，它让你在循环时：同时得到 索引（index） 和 元素（value）
    # compare: for i in range(len(list)) 
            # for i, value in enumerate(list)

    if i == 0 or letter != user_word[i - 1]:
        result += letter
print(result)


# user_word = input("Write a string: ")

# result = user_word[0]

# for letter in user_word[1:]:
#     if letter != result[-1]:
#         result += letter

# print(result)