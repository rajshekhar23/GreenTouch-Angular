import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { IProductCategories } from '../model/IProductCategories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-range',
  templateUrl: './products-range.component.html',
  styleUrls: ['./products-range.component.css'],
  providers: [ApiServicesService]
})
export class ProductsRangeComponent implements OnInit {
  _allProductCategories: IProductCategories[];

  constructor(private _apiService: ApiServicesService, private _router: Router) { }

  getAllProductCategories(): void {
    this._apiService.getAllProductCategories()
      .subscribe(result => {
        result.forEach(function (res, index) {
          res['imgUrl'] = '../../../assets/images/' + (index + 1) + '.jpg';
        })
        console.log(result);
        this._allProductCategories = result
      },
      error => console.log('Error :: ' + error))
  }

  navigateProductCategoryDetails(product) {
    this._router.navigate(['/paintcategorylist', { 'categoryId': product.c_id }]);
  }

  ngOnInit() {
    this.getAllProductCategories();
  }

}
