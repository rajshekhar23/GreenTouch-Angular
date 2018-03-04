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
  _productsByCategory: IProductByCategory[];
  constructor(private _apiService: ApiServicesService,
    private _activatedRoute: ActivatedRoute) {
  }

  getProductDetailsByCategoryId(id): void {
    this._apiService.getProductDetailsByCategoryId(id)
      .subscribe(result => {
        result.forEach(function (res, index) {
          res['imgUrl'] = '../../../assets/images/' + (index + 1) + '.jpg';
        })
        this._productsByCategory = result
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
