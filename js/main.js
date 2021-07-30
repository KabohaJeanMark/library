const myLibrary = [
  {
    name: 'Harry Porter',
    author: 'J.K Rowling',
    pages: '200',
    read: 'yes'
  }
];

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

function deleteBook(book) {
  const bookIndex = myLibrary.indexOf(book);
  delete myLibrary[bookIndex];
  console.log('The book has been deleted')
}

function updateStatus(book) {
  console.log(book);
  if (book.read== 'yes') {
    book.read = 'no';
  }
  else {
    book.read = 'yes';
  }
  console.log(book);
}

function createBookCard(book) {
  const div = document.createElement('div');
  div.classList.add('m-2','p-1')
  const p = document.createElement('p');
  p.textContent = book.name;
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn','btn-danger','m-1'); 
  deleteBtn.textContent = 'DELETE';
  const updateBtn = document.createElement('button');
  updateBtn.classList.add('btn','btn-warning','m-1');
  updateBtn.textContent = 'UPDATE';
  div.appendChild(p);
  div.appendChild(deleteBtn);
  div.appendChild(updateBtn);
  deleteBtn.addEventListener('click', deleteBook(book));
  updateBtn.addEventListener('click',updateStatus(book));
  return div;
}

function displayAllBooks() {
  if (!myLibrary.length) {
    console.log('There are no books in library')
    const div2 = document.createElement('div');
    const p2 = document.createElement('p');
    p2.textContent = 'There are currently no books';
    div2.appendChild(p2);
    return div2;
  }
  else {
    for (const book of myLibrary) {
      const bookCard = createBookCard(book);
      allBooks.appendChild(bookCard);
    }
  }
  
}

const addForm = document.getElementById('createForm');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

const getAllBoooks = document.querySelector('#allBooks');
getAllBoooks.addEventListener('click', displayAllBooks);
