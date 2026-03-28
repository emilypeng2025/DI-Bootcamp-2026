class Person {
    constructor(
      protected ssn: string,
      private firstName: string,
      private lastName: string
    ) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  //Define a subclass Student that extends Person and includes a protected property studentID.

// class Student extends Person{
//     constructor(ssn: string, firstName: string, lastName: string) {
//         super(ssn, firstName, lastName)
//     }
// }

class Student extends Person{
    protected studentID: string

    constructor(
        ssn: string, 
        firstName: string, 
        lastName: string,
        studentID: string
    ) {
        super(ssn, firstName, lastName)
        this.studentID = studentID
    }
}


// Define a Car Interface

// Task: Create an interface Car with properties make, model, and year (all strings). Then, write a function getCarInfo that takes a Car object and returns a formatted string with the car's details.

interface Car {
    make: string,
    model: string,
    year: number
}

function getCarInfo (car: Car): string {
    return `The ${car.make} car is a model of ${car.model} in year ${car.year}`
}

let car = {
    make: "BMW",
    model: "X7",
    year: 2025
}

