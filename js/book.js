export class Book {
  constructor({ author, title, readPriority, category }) {
    this.setAuthor(author);
    this.setTitle(title);
    this.setReadPriority(readPriority);
    this.setCategory(category);
  }

  setAuthor(author) {
    this._author = this.validateAuthor(author);
  }

  setTitle(title) {
    this._title = this.validateTitle(title);
  }

  setReadPriority(readPriority) {
    this._readPriority = this.validateReadPriority(Number(readPriority));
  }

  setCategory(category) {
    this._category = this.validateCategory(category);
  }

  getAuthor() {
    return this._author;
  }
  getTitle() {
    return this._title;
  }
  getReadPriority() {
    return this._readPriority;
  }
  getCategory() {
    return this._category;
  }

  validateAuthor(author) {
    if (!author) throw new Error('No author name');
    if (typeof author !== 'string') throw new Error('Wrong data type. String expected.');
    if (author.length < 3) throw new Error('Author name is too short');
    return author;
  }

  validateTitle(title) {
    if (!title) throw new Error('No title name');
    if (typeof title !== 'string') throw new Error('Wrong data type. String expected.');
    if (title.length < 1) throw new Error('Title name is too short');
    return title;
  }

  validateReadPriority(priority) {
    if (!priority) throw new Error('No priority value.');
    if (typeof priority !== 'number' || isNaN(priority)) throw new Error('Wrong data type. Number expected.');
    if (priority < 1 || priority > 5) throw new Error('Priority should be between 1 and 5');
    return priority;
  }

  validateCategory(category) {
    if (!category) throw new Error('No category value.');
    if (typeof category !== 'string') throw new Error('Wrong data type. String expected.');
    return category;
  }
}