import { BookComponent } from './book.component';
import { Book } from '../shared/book';

describe('BookComponent Isolated', () => {

  let comp: BookComponent;

  beforeEach(() => {
    comp = new BookComponent();

    comp.book = {
      rateUp: () => { },
      rateDown: () => { }
    } as Book;
  });

  it('should forward rateUp() to the Book entity', () => {
    spyOn(comp.book, 'rateUp');
    comp.rateUp();
    expect(comp.book.rateUp).toHaveBeenCalled();
  });

  it('should forward rateDown() to the Book entity', () => {
    spyOn(comp.book, 'rateDown');
    comp.rateDown();
    expect(comp.book.rateDown).toHaveBeenCalled();
  });
});
