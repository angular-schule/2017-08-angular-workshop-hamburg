import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreateBookReactiveComponent } from './create-book-reactive/create-book-reactive.component';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent,
    CreateBookReactiveComponent,
    BookDetailsComponent
  ]
})
export class BooksModule { }
