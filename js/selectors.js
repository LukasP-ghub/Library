export class Selectors {
  constructor() {
    this.bookTitle = document.querySelector('[data-bookTitle]');
    this.bookAuthor = document.querySelector('[data-bookAuthor]');
    this.readPriority = document.querySelector('[data-readPriority]');
    this.bookCategory = document.querySelector('[data-bookCategory]');
    this.sendBtn = document.querySelector('[data-sendBtn]');
    this.booksList = document.querySelector('[data-bookList]');
    this.addBookForm = document.querySelector('[data-addBookForm]');
  }
}