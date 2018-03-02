import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css'],
  providers: [ApiServicesService]
})
export class QualityComponent implements OnInit {
  private _allQuality: any;
  constructor(private _apiService: ApiServicesService) { }

  ngOnInit() {
    this.getQuality();
  }

  getQuality() {
    this._apiService.getQuality()
      .subscribe(result => {
        console.log(result);
        this._allQuality = result
      },
      error => console.log('Error :: ' + error));
  }
}
