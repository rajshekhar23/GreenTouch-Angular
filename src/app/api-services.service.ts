import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProductCategories } from './model/IProductCategories';
import 'rxjs/Rx';
import { IProductByCategory } from './model/IProductsByCategory';

@Injectable()
export class ApiServicesService {

  private _allProductCategoriesUrl = 'http://localhost/neelu/allCategory.php';
  private _productDetailsByCategoryIdUrl = 'http://localhost/neelu/product.php?categoryId=';
  private _allProductsIfNotCategoryId = 'http://localhost/neelu/allProducts.php';
  private _qualityUrl = 'http://localhost/neelu/quality.php';
  private _policyAndTerms = 'http://localhost/neelu/policyTerm.php';

  constructor(private _http: Http) { }

  getAllProductCategories(): Observable<IProductCategories[]> {
    return this._http.get(this._allProductCategoriesUrl)
      .map((response: Response) => {
        return <IProductCategories[]>response.json();
      }).catch(this.handleError);
  }

  getProductDetailsByCategoryId(categoryId): Observable<IProductByCategory[]> {
    const URL = categoryId ? this._productDetailsByCategoryIdUrl + categoryId : this._allProductsIfNotCategoryId;
    console.log(URL);
    return this._http.get(URL)
      .map((response: Response) => {
        console.log('Response :: ', response.json());
        return <IProductByCategory[]>response.json();
      }).catch(this.handleError);
  }

  getQuality() {
    return this._http.get(this._qualityUrl)
      .map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }

  getPolicyAndTerm() {
    return this._http.get(this._policyAndTerms)
      .map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }

  handleError(error: Response) {
    console.log('From Error ', error);
    return Observable.throw(error.statusText);
  }

}
