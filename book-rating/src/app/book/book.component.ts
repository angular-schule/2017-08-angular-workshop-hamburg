import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Input() pos: number;

  get imgUrl() {
    return `//ng-buch.de/avatar/${this.book.rating}`;
  }

  ratingArray(rating: number) {
    return new Array(rating);
  }

  constructor() { }

  ngOnInit() {
  }

}
