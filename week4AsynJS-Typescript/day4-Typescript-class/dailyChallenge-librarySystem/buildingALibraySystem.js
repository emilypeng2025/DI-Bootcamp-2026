"use strict";
// Daily Challenge: Building a Library System with TypeScript Classes and Interfaces
//2. class Libray 管理书本数组
class Library {
    books = []; //类型系统: books 是一个“数组”，里面每一项都是 Book 类型,  Book = 一本书的结构（对象）
    //为什么要加类型？TypeScript 帮你保证:错误数据会被拦住,正确结构才允许, 每一项必须是 Book: books: Book[]
    //protected: 子类可以用
    //books: 变量名; Book[] 数组，每个元素是 Book; = []初始为空数组
    // A public method addBook to add a new book to the library.
    //这个方法: 把传进来的书，放进 books 数组
    addBook(book) {
        //什么时候用 void？当函数只是：修改数据, 	打印东西, 执行动作
        this.books.push(book); //push 的意思:把一个元素加到数组末尾, at the beginning, this.books = [], if there is a book that fits interface Book, push that book into array[]: [book]
    }
    getBookDetails(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book) {
            return `${book.title} by ${book.author}, ISBN: ${book.isbn}, Year: ${book.publishedYear}, Genre: ${book.genre ?? "N/A"}`;
        }
        else {
            return "Book not found";
        }
    }
}
class DigitalLibrary extends Library {
    website;
    constructor(website) {
        super();
        this.website = website;
    }
    listBooks() {
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
