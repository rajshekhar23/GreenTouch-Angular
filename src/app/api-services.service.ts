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
  private _searchCategoryUrl = 'http://localhost/neelu/search.php?catsearch=';
  private enquiryUrl = 'http://localhost/neelu/contact.php?';
  private _contactDetailsUrl = 'http://localhost/neelu/contactUs.php';
  private _aboutUsUrl = 'http://localhost/neelu/aboutUs.php';
  private _productsWithGroupCategory = 'http://localhost/neelu/productsWithGroupCategoey.php';

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
/*     return this._http.get(this._productsWithGroupCategory)
      .map((response: Response) => {
      }).catch(this.handleError);
 */  }

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
