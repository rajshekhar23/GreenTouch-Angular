import { Component, OnInit, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import { ApiServicesService } from '../api-services.service';
import $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [ApiServicesService]
})
export class ContactusComponent implements OnInit {
  public lat: number;
  public lng: number;
  public isTransparant: boolean;
  complexForm: FormGroup;
  private $: any;
  _contactDetails: any;
  ownerMail: any;
  ownerPhone: any;
  constructor(private fb: FormBuilder, private _http: Http, private _apiService: ApiServicesService) {

    this.complexForm = fb.group({
      'name': [null, Validators.required],
      'message': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required,
      Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      'phone': [null, Validators.compose([Validators.required,
      Validators.pattern('^[0-9]{10}$')])]
    });
  }


  submitForm(value: any): void {
    const body = 'name=' + value.name + '&email=' + value.email +
      '&phone=' + value.phone + '&message=' + value.message;
    this._apiService.contactUs(body).subscribe(data => {
      document.getElementById('statusMessage').innerHTML = JSON.parse(data)[0].message;
      setTimeout(function () {
        document.getElementById('statusMessage').innerHTML = '';
      }, 3000);
      this.complexForm.reset();
    });

  }

  getContactDetails(): void {
    this._apiService.getContactDetails()
      .subscribe(result => {
        this._contactDetails = result;
        this.ownerMail = result[0].email;
        this.ownerPhone = result[0].phone;
      },
        error => console.log('Error :: ' + error))
  }

  ngOnInit() {
    this.lat = 18.626076;
    this.lng = 73.812157;
    this.getContactDetails();
  }

}
