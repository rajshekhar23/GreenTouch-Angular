import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductByCategory } from '../model/IProductsByCategory';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-list-paint-category-items',
  templateUrl: './list-paint-category-items.component.html',
  styleUrls: ['./list-paint-category-items.component.css'],
  providers: [ApiServicesService]
})
export class ListPaintCategoryItemsComponent implements OnInit {
  id: number;
  private sub: any;
  _productsByCategory: any;
  _productCategoryDesc: any;
  constructor(private _apiService: ApiServicesService,
    private _activatedRoute: ActivatedRoute) {
  }

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
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.id = params['categoryId'];
      this.getProductDetailsByCategoryId(this.id);
    })
    this.getProductDetailsByCategoryId(this.id);
  }

}
