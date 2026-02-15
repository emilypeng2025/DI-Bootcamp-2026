# #what is python
# print("Hello to Python")
# # basic math
# print(2 + 2) # =4
# print(10 - 3) # =7
# print(20 / 4) #5.0
# print(10 // 3) #floor division =3, compared to the / that will give #3.3333333
# print(10 % 3) #1 余数
# print(2 ** 8) #256

# #order of operation
# print(5 + 3 * 2) # =11
# print((5 + 3) * 2) # =16

greeting = "Hello class"
# type()
# print(type(greeting))
# print(type("hi"))
# print(type(123))
# print(type("123"))

## string method
# print(greeting.upper())
# print(greeting.lower())
# print(greeting.capitalize())
# print(len(greeting))

# string concatenation - joining strings together
# first = "John"
# last = "Due"
# full_name = first + " " + last
# print(full_name)

# print("Ha" * 3)
# print(dir("42"))

# # .replace("", "")
# text = "Hello, world"
# # print(text.replace("world", "Python"))

# # # .count
# # print(text.count("l"))

# multiline = """
# line 1
# line 2
# """
# # print(multiline)
# print(text[0])
# print(text[-1])

#
# Numbers
# 
# integers
age = 25
temp = 25
year = 2026
print(type(year))

# float
price = 19.99
pi = 3.14159
print(type(price))

# Booleans - True/False
is_sunny = True
is_raining = False
# what about is_raining = "False"/ "" /" "

print(type(is_sunny))

print(5 > 3) #True
print(10 < 5) #False
print(7 == 7) #True
print(5 != 3) #True

#Comparison Operators
# == 
# !=
# >
# <
# >=
# <=

#logical operators - and/ or/ not
print (True and True) #True
print (True and False) #False

print(True or False) #True
print (False or True) #True
print (False or False) #False

print(not True) #False
print(not False) #True