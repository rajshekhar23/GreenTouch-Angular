import { Component, OnInit } from "@angular/core";
import { ApiServicesService } from "../api-services.service";
import { IProductByCategory } from "../model/IProductsByCategory";

@Component({
  selector: "app-all-products-grid",
  templateUrl: "./all-products-grid.component.html",
  styleUrls: ["./all-products-grid.component.css"],
  providers: [ApiServicesService]
})
export class AllProductsGridComponent implements OnInit {
  _productsByCategory: any;
  allProducts: IProductByCategory[];
  constructor(private _apiService: ApiServicesService) {}

  getProductDetailsByCategoryId(id): void {
    this._apiService.getProductDetailsByCategoryId(id).subscribe(
      result => {
        result.forEach(function(res, index) {
          res["imgUrl"] =
            "https://www.b2bharat.com/uploads/product/1000x600/" + res.photo1;
        });
        this._productsByCategory = result;
      },
      error => console.log("Error :: " + error)
    );
  }

  ngOnInit() {
    this.getProductDetailsByCategoryId(undefined);
  }
}
