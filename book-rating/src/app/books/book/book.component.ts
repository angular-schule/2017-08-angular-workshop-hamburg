import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Output() rated = new EventEmitter<Book>();

  @Input() book: Book;
  @Input() pos: number;

  constructor(private bs: BookStoreService) {}

  get imgUrl() {
    return `//ng-buch.de/avatar/${this.book.rating}`;
  }

  ratingArray(rating: number) {
    return new Array(rating);
  }


  rateUp() {
    this.book.rateUp();
    this.publishRating();
    this.rated.emit(this.book);
  }


  rateDown() {
    this.book.rateDown();
    this.publishRating();
    this.rated.emit(this.book);
  }

  publishRating() {
    this.bs.updateRating(this.book.isbn, this.book.rating)
      .subscribe(res => console.log('Rating published for book', this.book.isbn)) ;
  }

  ngOnInit() {
  }

}
