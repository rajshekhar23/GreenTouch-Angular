import { Component, OnInit } from "@angular/core";
import { ApiServicesService } from "../api-services.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-product-brochure",
  templateUrl: "./product-brochure.component.html",
  styleUrls: ["./product-brochure.component.css"],
  providers: [ApiServicesService]
})
export class ProductBrochureComponent implements OnInit {
  file: any;
  fileName: any;
  isPDF: boolean;
  constructor(
    private _apiService: ApiServicesService,
    private sanite: DomSanitizer
  ) {
    this.isPDF = false;
  }

  ngOnInit() {
    this.getBrochureDetails();
  }

  getBrochureDetails(): void {
    this._apiService.getBrochureDetails().subscribe(
      result => {
        this.file = result;
        this.fileName = this.sanite.bypassSecurityTrustResourceUrl(
          "https://www.b2bharat.com/uploads/company/brochure/" +
            this.file.COM_brochure
        );
        console.log(this.fileName);
        this.isPDF = this.fileName.split(".").pop() == "pdf" ? true : false;
        console.log(this.isPDF);
      },
      error => console.log("Error :: " + error)
    );
  }
}
