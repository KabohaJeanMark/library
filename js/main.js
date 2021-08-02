const myLibrary = [];

const allBooks = document.getElementById('bookList');

const book = (name, author, pages, read) => {
  return {
    name, author, pages, read
  };
};

function displayAllBooks(createBookCard) {
  if (!myLibrary.length) {
    const p2 = document.createElement('p');
    p2.textContent = 'There are currently no books';
    allBooks.appendChild(p2);
  } else {
    myLibrary.forEach((book) => {
      const bookCard = createBookCard(book);
      allBooks.appendChild(bookCard);
      allBooks.style.display = 'block';
    });
  }
}

function createBookCard(book) {
  const div = document.createElement('div');
  div.classList.add('m-2', 'p-1');
  const heading4 = document.createElement('h4');
  heading4.textContent = book.name;
  const readP = document.createElement('p');
  readP.textContent = `Read? ${book.read}`;
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn', 'btn-danger', 'm-1');
  deleteBtn.textContent = 'DELETE';
  const updateBtn = document.createElement('button');
  updateBtn.classList.add('btn', 'btn-warning', 'm-1');
  updateBtn.textContent = 'UPDATE';
  div.appendChild(heading4);
  div.appendChild(readP);
  div.appendChild(deleteBtn);
  div.appendChild(updateBtn);

  function deleteBook(book, displayAllBooks) {
    const bookIndex = myLibrary.indexOf(book);
    myLibrary.splice(bookIndex, 1);
    allBooks.textContent = '';
    displayAllBooks(createBookCard);
  }
  function updateStatus(book, displayAllBooks) {
    if (book.read === 'yes') {
      book.read = 'no';
    } else {
      book.read = 'yes';
    }
    allBooks.textContent = '';
    displayAllBooks(createBookCard);
  }

  updateBtn.addEventListener('click', () => {
    updateStatus(book, displayAllBooks);
  });
  deleteBtn.addEventListener('click', () => {
    deleteBook(book, displayAllBooks);
  });
  return div;
}

function addBookToLibrary() {
  const name = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  let read;
  const rbs = document.querySelectorAll('input[name="read"]');
  rbs.forEach((rb) => {
    if (rb.checked) {
      read = rb.value;
    }
  });
  const addedBook = book(name, author, pages, read);
  myLibrary.push(addedBook);
  allBooks.textContent = '';
  displayAllBooks(createBookCard);
}

const addForm = document.getElementById('createForm');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

const getAllBoooks = document.querySelector('#allBooks');
getAllBoooks.addEventListener('click', displayAllBooks);
