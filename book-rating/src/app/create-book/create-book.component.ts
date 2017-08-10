import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  // auch möglich: @ViewChild('bookForm') bookForm: NgForm;
  @ViewChild(NgForm) bookForm: NgForm;

  book = Book.empty();

  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.bookForm.reset();
  }

}
