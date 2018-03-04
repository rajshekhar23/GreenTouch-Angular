import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { IProductCategories } from '../model/IProductCategories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ApiServicesService]
})
export class FooterComponent implements OnInit {
  _allProductCategories: IProductCategories[];

  constructor(private _apiService: ApiServicesService, private _router: Router) { }

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

  ngOnInit() {
    this.getAllProductCategories();
  }

}
