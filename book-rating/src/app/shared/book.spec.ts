import {Book} from './book';

describe('Book', () => {

  let book: Book;

  beforeEach(() => {
    book = new Book('isbn', 'title', 'desc');
  });

  it('should create an instance', () => {
    expect(new Book('', '', '')).toBeTruthy();
  });

  it('rateUp() should rate up the book', () => {
    book.rating = 3;
    book.rateUp();
    expect(book.rating).toBe(4);
  });

  it('rateDown() should rate down the book', () => {
    book.rating = 3;
    book.rateDown();
    expect(book.rating).toBe(2);
  });

  it('rating should not be greater than 5', () => {
    book.rating = 5;
    book.rateUp();
    expect(book.rating).toBe(5);
  });

  it('rating should not be less than 0', () => {
    book.rating = 0;
    book.rateDown();
    expect(book.rating).toBe(0);
  });


});
