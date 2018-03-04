import { Component, OnInit, HostListener } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IProductCategories } from '../model/IProductCategories';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ApiServicesService]
})

export class HeaderComponent implements OnInit {
  private $: any;
  title = 'app works!';
  public isOpened: boolean;
  public inputSearch: any;
  public isTransparant: boolean;
  searchTerm: FormControl = new FormControl();
  searchResult = [];
  _allProductCategories: IProductCategories[];

  constructor(private _apiService: ApiServicesService, private _router: Router) {
    this.isOpened = false;
    this.searchTerm.valueChanges.debounceTime(200)
      .subscribe(data => {
        this._apiService.search_word(data).subscribe(response => {
          this.searchResult = response;
        })
      });
  }

  ngOnInit() {
    this.getAllProductCategories();
  }

  getAllProductCategories(): void {
    this._apiService.getAllProductCategories()
      .subscribe(result => {
        result.forEach(function (res, index) {
          res['imgUrl'] = '../../../assets/images/' + (index + 1) + '.jpg';
        })
        this._allProductCategories = result
      },
      error => console.log('Error :: ' + error))
  }

  search() {
    this.inputSearch = '';
    this.searchResult = [];
    this.isOpened = !this.isOpened;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isTransparant = window.scrollY > 80 ? true : false;
  }

}
