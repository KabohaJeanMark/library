const myLibrary = [];

const allBooks = document.getElementById('bookList');

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createBookCard(book) {
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = book.title;
  div.appendChild(p);
  return div;
}

function displayAllBooks() {
  for (const book of myLibrary) {
    const bookCard = createBookCard(book);
    allBooks.appendChild(bookCard);
  }
}