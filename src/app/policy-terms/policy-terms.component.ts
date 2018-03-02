import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-policy-terms',
  templateUrl: './policy-terms.component.html',
  styleUrls: ['./policy-terms.component.css'],
  providers: [ApiServicesService]
})

export class PolicyTermsComponent implements OnInit {
  _policyAndTerm: any;
  constructor(private _apiService: ApiServicesService) { }

  ngOnInit() {
    this.getPolicyAndTerm();
  }

  getPolicyAndTerm() {
    this._apiService.getPolicyAndTerm()
      .subscribe(result => {
        console.log(result);
        this._policyAndTerm = result
      },
      error => console.log('Error :: ' + error));
  }
}
