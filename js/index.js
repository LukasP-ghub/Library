import { Selectors } from './selectors';
import { Book } from './book';

class App extends Selectors {
  constructor() {
    super();
    this._books = [];
  }

  getBooks() {
    if (!Array.isArray(this._books)) return [];
    return this._books;
  }

  setBooks(book) {
    if (book instanceof Book) return this._books.push(book);
    let books = book;
    if (Array.isArray(books) && books.length > 0) {
      this._books = books.map(({ title, author, readPriority, category }) => new Book({
        title,
        author,
        readPriority,
        category,
      }))
    } else {
      this._books = [];
    }
  }

  mapBooksData(books) {
    return books.map(book => {
      return {
        title: book.getTitle(),
        author: book.getAuthor(),
        readPriority: book.getReadPriority(),
        category: book.getCategory(),
      }
    })
  }

  printBooksOnScreen() {
    this.booksList.innerHTML = `
        <p class="author columnHeader">Author</p>
        <p class="title columnHeader">Title</p>
        <p class="priority columnHeader">Read priority</p>
        <p class="category columnHeader">Category</p>`;
    this.getBooks().map(book => {
      const titleElem = document.createElement('p');
      const authorElem = document.createElement('p');
      const priorityElem = document.createElement('p');
      const categoryElem = document.createElement('p');
      titleElem.textContent = book.getTitle();
      authorElem.textContent = book.getAuthor();
      priorityElem.textContent = book.getReadPriority();
      categoryElem.textContent = book.getCategory();
      titleElem.classList.add('title');
      authorElem.classList.add('author');
      priorityElem.classList.add('priority');
      categoryElem.classList.add('category');
      this.booksList.appendChild(titleElem);
      this.booksList.appendChild(authorElem);
      this.booksList.appendChild(priorityElem);
      this.booksList.appendChild(categoryElem);
    })
  }

  handleAddBook(e) {
    e.preventDefault();
    const book = new Book({
      title: this.bookTitle.value,
      author: this.bookAuthor.value,
      readPriority: this.readPriority.value,
      category: this.bookCategory.value,
    });
    this.setBooks(book);
    localStorage.setItem('books', JSON.stringify(this.mapBooksData(this.getBooks())));
    this.printBooksOnScreen();
    this.addBookForm.reset();
    return false;
  }

  init() {
    this.setBooks(JSON.parse(localStorage.getItem('books')));
    this.printBooksOnScreen();
    this.addBookForm.addEventListener('submit', this.handleAddBook.bind(this));
  }
}

const app = new App();
app.init();