import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book-reactive',
  templateUrl: './create-book-reactive.component.html',
  styleUrls: ['./create-book-reactive.component.css']
})
export class CreateBookReactiveComponent implements OnInit {

  form: FormGroup;

  book = Book.empty();

  @Output() bookCreated = new EventEmitter<Book>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      isbn: ['', [Validators.required, Validators.minLength(3)]],
      title: ['Testbuch', [Validators.required]],
      description: ['']
    });

    this.form.valueChanges.subscribe(v => console.log(v));
  }

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
  }

}
