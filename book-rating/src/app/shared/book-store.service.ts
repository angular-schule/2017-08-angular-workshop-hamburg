import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';
import { BookResponse } from './book-response';

@Injectable()
export class BookStoreService {

  apiUrl = 'https://api.angular.schule/secure';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<BookResponse[]>(`${this.apiUrl}/books`)
      .map(rawBooks => rawBooks.map(
        rawBook => new Book(rawBook.isbn, rawBook.title, rawBook.description, rawBook.rating))
      );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookResponse>(`${this.apiUrl}/book/${isbn}`)
      .map(rawBook => new Book(rawBook.isbn, rawBook.title, rawBook.description, rawBook.rating));
  }

  create(book: Book): Observable<any> {
    return this.http.post(`${this.apiUrl}/book`, book);
  }

  updateRating(isbn: string, rating: number) {
    return this.http.post(`${this.apiUrl}/book/${isbn}/rate`, { rating: rating });
  }

}
