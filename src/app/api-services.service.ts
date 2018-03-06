import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProductCategories } from './model/IProductCategories';
import 'rxjs/Rx';
import { IProductByCategory } from './model/IProductsByCategory';

@Injectable()
export class ApiServicesService {

  pathApi: string = 'https://crossorigin.me/http://www.greentouchpaints.com/';
  pathLocalApi: string = 'http://localhost/';

  private _allProductCategoriesUrl = this.pathApi + 'neelu/allCategory.php';
  private _productDetailsByCategoryIdUrl = this.pathApi + 'neelu/product.php?categoryId=';
  private _allProductsIfNotCategoryId = this.pathApi + 'neelu/allProducts.php';
  private _qualityUrl = this.pathApi + 'neelu/quality.php';
  private _policyAndTerms = this.pathApi + 'neelu/policyTerm.php';
  private _searchCategoryUrl = this.pathApi + 'neelu/search.php?catsearch=';
  private enquiryUrl = this.pathApi + 'neelu/contact.php?';
  private _contactDetailsUrl = this.pathApi + 'neelu/contactUs.php';
  private _aboutUsUrl = this.pathApi + 'neelu/aboutUs.php';
  private _productsWithGroupCategory = this.pathApi + 'neelu/productsWithGroupCategoey.php';

  constructor(private _http: Http) { }

  getProductPortfolio() {
    let promise = new Promise((resolve, reject) => {
      let res = [];
      this._http.get(this._productsWithGroupCategory)
        .toPromise().then(response => {
          let set = new Set(response.json().map(item => item.prod_group));
          set.forEach(function (group) {
            res.push(response.json().filter(function (event) {
              return event.prod_group == group;
            }));
          });
          resolve(res);
        });
    });
    return promise;
  }

  getAllProductCategories(): Observable<IProductCategories[]> {
    return this._http.get(this._allProductCategoriesUrl)
      .map((response: Response) => {
        return <IProductCategories[]>response.json();
      }).catch(this.handleError);
  }

  getProductDetailsByCategoryId(categoryId): Observable<IProductByCategory[]> {
    const URL = categoryId ? this._productDetailsByCategoryIdUrl + categoryId : this._allProductsIfNotCategoryId;
    return this._http.get(URL)
      .map((response: Response) => {
        console.log(response);
        return <IProductByCategory[]>response.json();
      }).catch(this.handleError);
  }

  getQuality() {
    return this._http.get(this._qualityUrl)
      .map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }

  getAboutUsDetails() {
    return this._http.get(this._aboutUsUrl)
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

  search_word(data) {
    return this._http.get(this._searchCategoryUrl + data)
      .map((response: Response) => {
        return response.json().map(item => {
          return item
        })
      }).catch(this.handleError);
  }

  handleError(error: Response) {
    console.log('From Error ', error);
    return Observable.throw(error.statusText);
  }

  contactUs(body) {
    return this._http.get(this.enquiryUrl + body)
      .map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }

  getContactDetails() {
    return this._http.get(this._contactDetailsUrl)
      .map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }

}
