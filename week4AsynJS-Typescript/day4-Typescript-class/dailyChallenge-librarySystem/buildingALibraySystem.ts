// Daily Challenge: Building a Library System with TypeScript Classes and Interfaces


// 👩‍🏫 👩🏿‍🏫 What You’ll learn
// How to design and use TypeScript classes and interfaces.
// How to apply access modifiers to control access to properties and methods.
// How to use optional and readonly properties in interfaces.
// How to implement basic inheritance to extend class functionality.


// Instructions
// Create a simple library system with TypeScript:


// 1. Interface Book: Define an interface Book with the following properties:

// title (string)
// author (string)
// isbn (string)
// publishedYear (number)
// An optional genre property (string)


// 2. Class Library: Create a class Library with:

// A private property books (array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.



// 3. Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:

// A readonly property website (string) for the library’s website.
// A public method listBooks that returns a list of all book titles in the library.
// Create an instance of DigitalLibrary, add some books to it, and then print out the details of the books and the list of all book titles.

//1. reinforce what is interface: 规定一本书长什么样,no constuction, cannot create new.
interface Book {    
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

//2. class Libray 管理书本数组
class Library {     
    protected books: Book[] = []; //类型系统: books 是一个“数组”，里面每一项都是 Book 类型,  Book = 一本书的结构（对象）
                                //为什么要加类型？TypeScript 帮你保证:错误数据会被拦住,正确结构才允许, 每一项必须是 Book: books: Book[]
                                //protected: 子类可以用
                                //books: 变量名; Book[] 数组，每个元素是 Book; = []初始为空数组


    // A public method addBook to add a new book to the library.
    //这个方法: 把传进来的书，放进 books 数组
    public addBook(book: Book): void {      //void 表示：这个函数 不返回任何值, 为什么不需要 return? 这个函数的目的不是“给你一个值”, 而是“修改内部数据”: 把 book 加进 books 数组
                                            //什么时候用 void？当函数只是：修改数据, 	打印东西, 执行动作
        this.books.push(book)               //push 的意思:把一个元素加到数组末尾, at the beginning, this.books = [], if there is a book that fits interface Book, push that book into array[]: [book]
    }
  
    public getBookDetails(isbn: string): string {
        const book = this.books.find(book => book.isbn === isbn);

        if (book) {
            return `${book.title} by ${book.author}, ISBN: ${book.isbn}, Year: ${book.publishedYear}, Genre: ${book.genre ?? "N/A"}`;
        } else {
            return "Book not found";
        }

    }
}

class DigitalLibrary extends Library {
    constructor(readonly website: string) {
      super();
    }
  
    public listBooks(): string[] {
      return this.books.map(book => book.title);
    }
  }

  const myLibrary = new DigitalLibrary("https://mylibrary.com");

myLibrary.addBook({
title: "1984",
author: "George Orwell",
isbn: "111",
publishedYear: 1949,
genre: "Dystopian"
});

myLibrary.addBook({
title: "The Hobbit",
author: "J.R.R. Tolkien",
isbn: "222",
publishedYear: 1937
});

console.log(myLibrary.website);
console.log(myLibrary.getBookDetails("111"));
console.log(myLibrary.getBookDetails("222"));
console.log(myLibrary.listBooks());

// expected output: 
//https://mylibrary.com
// 1984 by George Orwell, ISBN: 111, Year: 1949, Genre: Dystopian
// The Hobbit by J.R.R. Tolkien, ISBN: 222, Year: 1937, Genre: N/A
// [ '1984', 'The Hobbit' ]