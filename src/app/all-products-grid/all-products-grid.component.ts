import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-all-products-grid',
  templateUrl: './all-products-grid.component.html',
  styleUrls: ['./all-products-grid.component.css'],
  providers: [ApiServicesService]
})
export class AllProductsGridComponent implements OnInit {
  _productsByCategory: any;
  constructor(private _apiService: ApiServicesService) { }

  getProductDetailsByCategoryId(id): void {
    this._apiService.getProductDetailsByCategoryId(id)
      .subscribe(result => {
        result.forEach(function (res, index) {
          res['imgUrl'] = 'https://www.b2bharat.com/uploads/product/1000x600/' + res.photo1;
        })
        console.log(result);
        this._productsByCategory = result;
        //this._productCategoryDesc = result.prod_gdes;
      },
        error => console.log('Error :: ' + error))
  }

  ngOnInit() {
    this.getProductDetailsByCategoryId(undefined);
  }

}
