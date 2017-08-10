import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  @ViewChild('isbnEl') isbn: ElementRef;
  @ViewChild('titleEl') title: ElementRef;
  @ViewChild('descriptionEl') description: ElementRef;

  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    const newBook = new Book(
      this.isbn.nativeElement.value,
      this.title.nativeElement.value,
      this.description.nativeElement.value
    );

    this.bookCreated.emit(newBook);

    this.isbn.nativeElement.value =
      this.title.nativeElement.value =
      this.description.nativeElement.value = '';
  }

}
