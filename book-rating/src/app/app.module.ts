import { TokenInceptorService } from './shared/token-inceptor.service';
import { AuthService } from './shared/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BookStoreService } from './shared/book-store.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BookStoreService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
