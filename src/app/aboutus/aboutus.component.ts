import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  providers: [ApiServicesService]
})
export class AboutusComponent implements OnInit {
  _aboutUsDetails: any;
  constructor(private _apiService: ApiServicesService) { }

  ngOnInit() {
    this.getAboutUsDetails();
  }

  getAboutUsDetails() {
    this._apiService.getAboutUsDetails()
      .subscribe(result => {
        console.log(result);
        this._aboutUsDetails = result
      },
      error => console.log('Error :: ' + error));
  }
}
