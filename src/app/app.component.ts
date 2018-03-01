import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public isOpened: boolean;
  public inputSearch: any;

  constructor() {
    this.isOpened = false;
  }
  search() {
    this.inputSearch = '';
    this.isOpened = !this.isOpened;
  }
}
