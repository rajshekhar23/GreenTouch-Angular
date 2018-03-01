import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'app works!';
  public isOpened: boolean;
  public inputSearch: any;
  public isTransparant: boolean;
  constructor() {
    this.isOpened = false;
  }

  ngOnInit() { }

  search() {
    this.inputSearch = '';
    this.isOpened = !this.isOpened;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isTransparant = window.scrollY > 80 ? true : false;
  }

}
