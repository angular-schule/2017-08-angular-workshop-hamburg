import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BookStoreService } from './shared/book-store.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreateBookReactiveComponent } from './create-book-reactive/create-book-reactive.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    CreateBookComponent,
    CreateBookReactiveComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
