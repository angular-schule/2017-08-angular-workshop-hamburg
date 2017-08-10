import { BookComponent } from './book.component';
import { Book } from '../shared/book';

describe('BookComponent', () => {
  it('should forward rateUp() to the Book entity', () => {
    const comp = new BookComponent();

    comp.book = {
      rateUp: () => { }
    } as Book;

    spyOn(comp.book, 'rateUp');

    comp.rateUp();

    expect(comp.book.rateUp).toHaveBeenCalled();
  });
});
