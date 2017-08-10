import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('isbnEl') isbn: ElementRef;
  @ViewChild('titleEl') title: ElementRef;
  @ViewChild('descriptionEl') description: ElementRef;
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

  add() {
    const newBook = new Book(
      this.isbn.nativeElement.value,
      this.title.nativeElement.value,
      this.description.nativeElement.value
    );

    this.books.push(newBook);

    // isbn.value = title.value = description.value = '';
  }

  reorderBooks(book: Book) {
    console.log('Rated book:', book);
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
