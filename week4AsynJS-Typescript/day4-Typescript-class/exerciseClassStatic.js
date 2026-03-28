"use strict";
// Exercises XP
// Last Updated: October 8th, 2025
// 👩‍🏫 👩🏿‍🏫 What You’ll learn
// Access Modifiers (private, protected, public):
// How to restrict or expose properties and methods within a class.
// Understanding how access modifiers control visibility inside and outside a class.
// Readonly Properties:
// How to create immutable properties in a class and interface.
// Learn to use readonly to prevent properties from being modified after initialization.
// Inheritance:
// How to create a base class and extend it in a subclass.
// Reusing and overriding methods and properties in the subclass for specialization.
// Static Properties and Methods:
// How to define static members that can be accessed without instantiating the class.
// Interfaces with Optional and Readonly Properties:
// How to define optional and immutable properties in an interface.
// Extending interfaces to add more specialized properties and methods.
// Function Types in Interfaces:
// How to define function types within interfaces and classes for more structured behavior.
// 🌟 Exercise 1: Class with Access Modifiers
// What You Will Learn:
// How to use access modifiers (private, protected, and public) in a class.
// How to create methods that interact with private and protected properties.
// Instructions:
// Create a class Employee with the following properties:
// A private property name of type string.
// A private property salary of type number.
// A public property position of type string.
// A protected property department of type string.
// Also, include a constructor to initialize these properties. Create a public method getEmployeeInfo that returns the employee’s name and position.
class Employee {
    name;
    salary;
    position;
    department;
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        // this.name = name;
        // this.salary = salary;
        // this.position = position;
        // this.department = department //no need for this part, it can be left empty because constructor already =this.name=name
    }
    getEmployeeInfo() {
        return `${this.name} ${this.position}`;
    }
}
//test: 
const emp = new Employee("Alice", 5000, "Developer", "IT");
console.log(emp.getEmployeeInfo()); // Alice Developer
// 🌟 Exercise 2: Readonly Properties in a Class
// What You Will Learn:
// How to use the readonly modifier to make class properties immutable.
// How to prevent modifications to class properties after initialization.
// Instructions:
// Create a class Product with the following properties:
// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price. Attempt to modify the id property after creating a new instance of the class and observe the result.
class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return `${this.name} ${this.price}`;
    }
}
const coffeeMaker = new Product(123, "mekineta", 100);
console.log(coffeeMaker.getProductInfo()); //"mekineta" 100
// coffeeMaker.id = 111; result: underlined id, because cannot assign because it is readonly property
// 🌟 Exercise 3: Class Inheritance
// What You Will Learn:
// How to create a base class and extend it using inheritance.
// How to reuse properties and methods from the base class.
// Instructions:
// Create a base class Animal with a public property name and a method makeSound that returns a string. Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes (“bark”). Create an instance of the Dog class and call the makeSound method.
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return `Makes sound`;
    }
}
// class Dog extends Animal {
//     constructor(public name: string){
//         super(name);
//     }
//     makeSound(): string {
//         return super.makeSound() + `barks` // here can directly use dog's sounds
//     }
// }
//no need to write constructor because it inheritates from Animal
class Dog extends Animal {
    makeSound() {
        return "bark";
    }
}
const dog = new Dog("Barak");
console.log(dog.makeSound());
// 🌟 Exercise 4: Static Properties and Methods
// What You Will Learn:
// How to use static properties and methods in a class.
// How to access static members without creating an instance of the class.
// Instructions:
// Create a class Calculator with the following static methods:
// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.
// 🌟 Exercise 5: Extending Interfaces with Optional and Readonly Properties
// What You Will Learn:
// How to extend an interface to add new properties.
// How to use optional and readonly properties in interfaces.
// Instructions:
// Create an interface User with properties id (readonly), name, and email. Extend the User interface to create a PremiumUser interface with an additional optional property membershipLevel. Create a function printUserDetails that accepts a PremiumUser and logs the details to the console.
