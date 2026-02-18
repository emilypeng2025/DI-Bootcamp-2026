# dictionary
# why use dictionary? when list can also work? 

# Access the value of key history


sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}

# del sample_dict["name"]
# print(sample_dict)

# del sample_dict["salary"]
# print(sample_dict)

my_books = {
  "title": "Harry Potter",
  "author": "JK Rowling",
}

print(my_books.items())
#make it a list
x, y = list(my_books.items())[0]
print(x)
print(y)


for x, y in my_books.items():
    print("the" + x + "is" + y)


for letter in 'Leonardo':
    if letter == 'o':
        continue
    print(letter, end='') # dont execute for 'o' letter
# >> Lenard

my_number = '1234'
my_list = []

for num in my_number:
    my_list.append(num)
print(my_list)

# if statement

user_name = input("what is your name? ")

if user_name == "sergei":
    print("Privet")
elif user_name == "ravite":
    print("Bonjour")
elif user_name == "alex":
    print("privet")
elif user_name == "dolev":
    print("shalom")
elif user_name == "xiao":
    print("ni hao")
elif user_name == "aaron":
    print("ahoy")
elif user_name == "other":
    print("hello")


greetings = {
    "sergei": "Privet",
    "revite": "Bonjour",
    "alex": "hola",
    "dolev": "shalom",
    "xiao": "ni hao",
    "aaron": "ahoy",
    "other": "hello"
}

print(greetings[user_name])