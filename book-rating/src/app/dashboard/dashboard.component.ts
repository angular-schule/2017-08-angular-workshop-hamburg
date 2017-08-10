import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

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

  books: Book[];

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but goldie', 3)
    ];
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
