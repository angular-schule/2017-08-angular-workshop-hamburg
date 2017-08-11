import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChildren(BookComponent) bookComps: QueryList<BookComponent>;

  imgUrl = 'https://ng-buch.de/avatar/12';

  books: Book[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.angular.schule/books')
      .map((rawBooks: any[]) => rawBooks.map(
        rawBook => new Book(rawBook.isbn, rawBook.title, rawBook.description, rawBook.rating))
      )
      .subscribe(books => this.books = books);
  }


  ngAfterViewInit() {
    console.log(this.bookComps);
  }

  addBook(book: Book) {
    this.books.push(book);
    this.reorderBooks(book);
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
