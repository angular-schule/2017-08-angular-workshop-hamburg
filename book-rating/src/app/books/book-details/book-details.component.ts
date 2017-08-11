import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { BookStoreService } from '../../shared/book-store.service';
import { Book } from '../../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;
  book: Book;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    this.route.params
      .map(p => p.isbn)
      .subscribe(isbn => {
        this.book$ = this.bs.getSingle(isbn);
      });

    // Alternativ: this.route.snapshot.params.isbn
  }

}
