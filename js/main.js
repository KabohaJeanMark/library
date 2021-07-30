const myLibrary = [];

const allBooks = document.getElementById('bookList');

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
  const rbs = document.querySelectorAll('input[name="read"]');
  for (const rb of rbs) {
    if (rb.checked) {
      read = rb.value;
      break;
    }
  }
  const addedBook = new Book(name, author, pages, read);
  myLibrary.push(addedBook);
}

function createBookCard(book) {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  console.log(book);
  p.textContent = book.name;
  p2.textContent = 'book 1';
  div.appendChild(p);
  return div;
}

function displayAllBooks() {
  for (const book of myLibrary) {
    const bookCard = createBookCard(book);
    allBooks.appendChild(bookCard);
  }
}

const addForm = document.getElementById('createForm');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

const getAllBoooks = document.querySelector('#allBooks');
getAllBoooks.addEventListener('click', displayAllBooks);
