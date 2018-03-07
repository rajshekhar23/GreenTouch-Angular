import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-product-portfolio',
  templateUrl: './product-portfolio.component.html',
  styleUrls: ['./product-portfolio.component.css'],
  providers: [ApiServicesService]
})

export class ProductPortfolioComponent implements OnInit {
  public _allProductByCategory: any;
  constructor(private _api: ApiServicesService) {
  }

  ngOnInit() {
    this.getAllProductCategories();
  }

  getAllProductCategories() {

    this._api.getProductPortfolio().then( res => {
      console.log(res);
      this._allProductByCategory = res;
    });
  }

  filter_dates(event) {
    return event.date == "22-02-2016";
  }

}
