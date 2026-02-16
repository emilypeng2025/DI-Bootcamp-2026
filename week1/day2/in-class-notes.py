# #sequences: list, tuple, strings
# #list

# my_name = "Jack"
# hello = "Hello World"
# my_age = 27
# my_list = [my_name, my_age, hello]

# #Modify an element: 
# # to add: method .append() list []+[]
# # to remove: .remove("") when you know the element
#             # .pop(index) if you just put .pop(), it will remove the last index
# my_list.append("189") #adds an element at the end
# # to sort: sorted(list)

# #can you append another list
# my_nums = [10, 20, 30, 40, 50]
# my_nums[1] = "z"
# print(my_nums)

# my_list.append(my_nums)

# #tuple
# my_tuple = (1+3, 2.7, 'Thursday')

# #string
# my_string = "I love cheese!"

# fifth_element = my_string[4]
# print(fifth_element)

# my_string = "I, love, cheese!"
# fifth_element = my_string[4]
# print(fifth_element)


list1 = [5, 10, 15, 20, 25, 50, 20]

print(list1.count(20))

list1[list1.index(20)]=200

print(list1)

# if "20" in list1:
#     list1.

# Unpack  the following tuple into 4 variables


a_tuple = (10, 20, 30, 40)

# Expected output:

a_tuple = (10, 20, 30, 40)
a, b, c, d = a_tuple

print(a) # should print 10
print(b) # should print 20
print(c) # should print 30
print(d) # should print 40

#loop
fruits = ['apple', 'banana', 'kiwi', 'pear']
for fruit in fruits:
    print(fruit)

#range
for i in range(10): #doesnt include the last number itself, so 0 to 9 will be printed
    print(i)

# Accept a number from the user and print its multiplication table
number_from_user = int(input("give a number: "))
for val in range(11):
    print(val*number_from_user)

#while loop
x = 0
while x < 10:
    print(x)
    x += 1

#make sure your exit condition is met
#control+c



