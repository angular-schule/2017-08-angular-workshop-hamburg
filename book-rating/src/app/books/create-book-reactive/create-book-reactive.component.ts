import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'br-create-book-reactive',
  templateUrl: './create-book-reactive.component.html',
  styleUrls: ['./create-book-reactive.component.css']
})
export class CreateBookReactiveComponent implements OnInit, OnDestroy {

  form: FormGroup;
  valueChanger: Subscription;

  @Output() bookCreated = new EventEmitter<Book>();

  constructor(private fb: FormBuilder, private bs: BookStoreService) { }

  ngOnInit() {
    this.form = this.fb.group({
      isbn: ['', [Validators.required, Validators.minLength(3)]],
      title: ['Testbuch', [Validators.required]],
      description: ['']
    });

    this.valueChanger = this.form.valueChanges
      .filter(e => !!e['isbn'])
      .map(e => e['isbn'])
      .distinctUntilChanged()
      .debounceTime(500)
      .subscribe(v => console.log('2)', v));
  }

  add() {
    const value = this.form.value;
    const newBook = new Book(value.isbn, value.title, value.description);

    this.bs.create(newBook).subscribe(res => {
      this.bookCreated.emit(newBook);
      this.form.reset();
    });
  }

  ngOnDestroy() {
    this.valueChanger.unsubscribe();
  }

}
