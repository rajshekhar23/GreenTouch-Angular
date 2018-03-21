import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ApiServicesService } from "../api-services.service";
import "rxjs/Rx";
import { Observable } from "rxjs/Rx";
@Component({
  selector: "app-product-portfolio",
  templateUrl: "./product-portfolio.component.html",
  styleUrls: ["./product-portfolio.component.css"],
  providers: [ApiServicesService]
})
export class ProductPortfolioComponent implements OnInit {
  public _policyAndTerm: any;
  constructor(private _api: ApiServicesService) {}

  ngOnInit() {
    this.getProductPortfolio();
  }
  getProductPortfolio() {
    this._api.getProductPortfolio().subscribe(
      result => {
        console.log(result);
        this._policyAndTerm = result;
      },
      error => console.log("Error :: " + error)
    );
  }
}
