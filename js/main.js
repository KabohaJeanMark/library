const myLibrary = [];

const allBooks = document.getElementById('bookList');

const addBookbtn = document.querySelector('#createBookBtn');

addBookbtn.onclick = addBookToLibrary();

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const name = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  let read;
  if (document.getElementById('alreadyRead').checked) {
    read = document.getElementById('alreadyRead').value;
  }
  else {
    read = document.getElementById('notRead').value;
  }
  addedBook = new Book(name, author, pages, read);
  myLibrary.push(addedBook);
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