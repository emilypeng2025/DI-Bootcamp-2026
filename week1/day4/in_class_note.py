# -*- coding: utf-8 -*-
# function
# DRY coding: dont repeat yourself

# function should be short

# def say_hello(username):
#     """A function that says hello"""
#     print(f"Hello! {username}") 

# def logout(username):
#     print(f"user {username} logged out!")

# user = input("What's the username? ")
# # user = "chicken"

# say_hello(user)
# logout(user)

# username is a parameter: used to the function


# add another parameter: 
def say_hello(username, location):
    """A function that says hello"""
    print(f"Hello! {username}! You are from {location}") 

def logout(username):
    print(f"user {username} logged out!")

user = input("What's the username? ")
# user = "chicken"
loc = input("Where are you from? ")

# say_hello(user, location)
# logout(user)

#keyword argument
say_hello(location=loc, username=user)

# For example:

def calculation(a, b):
    # Your Code
    add = a + b
    sub = a - b
    return(add, sub)

res = calculation(40, 10)
print(res)