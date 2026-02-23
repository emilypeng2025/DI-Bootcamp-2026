const allBooks = [
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      image: "https://via.placeholder.com/100x150",
      alreadyRead: true
    },
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      image: "https://via.placeholder.com/100x150",
      alreadyRead: false
    }
  ];

const section = document.querySelector(".listBooks");
console.log(section);


for (const book of allBooks) {
    const bookDiv = document.createElement("div");
  
    // text
    const bookText = document.createElement("p");
    bookText.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        bookText.style.color = "red";
    }
    // image
    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";
  
    bookDiv.appendChild(bookText);
    bookDiv.appendChild(img);
  
    section.appendChild(bookDiv);
}
