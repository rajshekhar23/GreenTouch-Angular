import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiServicesService } from "../api-services.service";

@Component({
  selector: "app-list-paint-category-items",
  templateUrl: "./list-paint-category-items.component.html",
  styleUrls: ["./list-paint-category-items.component.css"],
  providers: [ApiServicesService]
})
export class ListPaintCategoryItemsComponent implements OnInit {
  id: number;
  private sub: any;
  showSingle:boolean;
  _productsByCategory: any;
  _productsById: any;
  constructor(
    private _apiService: ApiServicesService,
    private _activatedRoute: ActivatedRoute
  ) {}

  getProductDetailsByCategoryId(id): void {
    this._apiService.getProductDetailsByCategoryId(id).subscribe(
      result => {
        result.forEach(function(res, index) {
          res["prod_group_name"] = res.prod_group_name;
          res["prod_gdes"] = res.prod_gdes;
          res["photo1"] =
            "https://www.b2bharat.com/uploads/product/1000x600/" + res.photo1;
        });
        this._productsByCategory = result;
        this.showSingle = true;
        console.log(this._productsByCategory);
      },
      error => console.log("Error :: " + error)
    );
  }

  getProductsByCategoey(): void {
    this._apiService.getProductsByCategoey().subscribe(
      result => {
        result.forEach(function(res, index) {
          res.products.forEach(function(prod) {
            prod["photo1"] =
              "https://www.b2bharat.com/uploads/product/1000x600/" +
              prod.photo1;
          });
        });
        console.log(result);
        this._productsByCategory = result;
      },
      error => console.log("Error :: " + error)
    );
  }

  ngOnInit() {
    this.showSingle = false;
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.id = params["categoryId"];
    });
    if (this.id) {
      this.getProductDetailsByCategoryId(this.id);
    } else {
      this.getProductsByCategoey();
    }
  }
}
