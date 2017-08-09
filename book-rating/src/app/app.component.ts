import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'br';

  constructor() {
    setTimeout(() => this.title = 'Book Rating', 2000);
  }
}
