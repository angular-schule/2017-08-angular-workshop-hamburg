import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from '../shared/book';

describe('BookComponent', () => {
  it('should forward rateUp() to the Book entity', () => {
    const comp = new BookComponent();

    let ratingWasCalled = false;

    const book = {
      rateUp: () => { ratingWasCalled = true; }
    } as Book;
    comp.book = book;

    comp.rateUp();

    expect(ratingWasCalled).toBe(true);
  });
});
