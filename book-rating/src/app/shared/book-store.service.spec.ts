import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookStoreService } from './book-store.service';
import { BookResponse } from './book-response';
import { Book } from './book';

const bookJson: BookResponse = {
    isbn: '11',
    title: 'abc',
    description: 'def',
    rating: 5
};

/* tslint:disable:max-line-length */
describe('BookStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookStoreService]
    });
  });

  it('should be created', inject([BookStoreService], (service: BookStoreService) => {
    expect(service).toBeTruthy();
  }));

  it('getSingle() should return one book', inject([BookStoreService, HttpTestingController], (bs: BookStoreService, httpMock: HttpTestingController) => {
    let book: Book;
    bs.getSingle(bookJson.isbn).subscribe(b => book = b);

    httpMock.expectOne(`${bs.apiUrl}/book/${bookJson.isbn}`).flush(bookJson);

    expect(book instanceof Book).toBeTruthy();
    expect(book.isbn).toEqual(bookJson.isbn);
    expect(book.title).toEqual(bookJson.title);
    expect(book.description).toEqual(bookJson.description);
    expect(book.rating).toEqual(bookJson.rating);
  }));
});
