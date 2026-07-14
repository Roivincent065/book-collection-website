// PART 1

class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
}


const book1 = new Book("Harry Potter", "J.K. Rowling", 1997, "Fantasy");

let books = [
    book1,
    new Book("The Hobbit", "J.R.R. Tolkien", 1937, "Fantasy"),
    new Book("Atomic Habits", "James Clear", 2018, "Self Help"),
    new Book("The Alchemist", "Paulo Coelho", 1988, "Adventure"),
    new Book("A Game of Thrones", "George R.R. Martin", 1996, "Fantasy"),
    new Book("The Dance with Dragon", "George R.R. Martin", 2011, "Adventure")
];

function displayBooks() {
    const bookList = document.getElementById("bookList");

    bookList.innerHTML = "";

    books.forEach((book, index) => {
        bookList.innerHTML += `
            <div class="book">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Year:</strong> ${book.year}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>

                <button onclick="editBook(${index})">Edit</button>
                <button onclick="deleteBook(${index})">Delete</button>
            </div>
        `;
    });
}

displayBooks();

// Part 2

document.getElementById("addBook").addEventListener("click", function () {

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    const genre = document.getElementById("genre").value;

    if (title === "" || author === "" || year === "" || genre === "") {
        alert("Please fill in all fields.");
        return;
    }

    const newBook = new Book(title, author, year, genre);

    books.push(newBook);

    displayBooks();

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
    document.getElementById("genre").value = "";
});

function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

function editBook(index) {

    const newTitle = prompt("Enter new title:", books[index].title);
    const newAuthor = prompt("Enter new author:", books[index].author);
    const newYear = prompt("Enter new year:", books[index].year);
    const newGenre = prompt("Enter new genre:", books[index].genre);

    if (
        newTitle !== null &&
        newAuthor !== null &&
        newYear !== null &&
        newGenre !== null
    ) {
        books[index].title = newTitle;
        books[index].author = newAuthor;
        books[index].year = newYear;
        books[index].genre = newGenre;

        displayBooks();
    }
}