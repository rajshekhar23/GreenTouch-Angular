import { Component, OnInit } from "@angular/core";
import { ApiServicesService } from "../api-services.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
  providers: [ApiServicesService]
})
export class FooterComponent implements OnInit {
  _allProductCategories: any;
  _contactDetails: any;

  constructor(
    private _apiService: ApiServicesService,
    private _router: Router
  ) {}

  getAllProductCategories(): void {
    this._apiService.getAllProductCategories().subscribe(
      result => {
        result.forEach(function(res, index) {
          res["imgUrl"] = "../../../assets/images/" + (index + 1) + ".jpg";
        });
        this._allProductCategories = result;
      },
      error => console.log("Error :: " + error)
    );
  }

  getContactDetails(): void {
    this._apiService.getContactDetails().subscribe(
      result => {
        this._contactDetails = result;
      },
      error => console.log("Error :: " + error)
    );
  }

  ngOnInit() {
    this.getAllProductCategories();
    this.getContactDetails();
  }
}
