import { Component, OnInit, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import { ApiServicesService } from '../api-services.service';
import $ from 'jquery';

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
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  private $: any;
  constructor(private _http: Http, private _apiService: ApiServicesService) {

  }

  ngOnInit() {
    this.lat = 18.626076;
    this.lng = 73.812157;
  }

  onSubmit() {
    const body = 'name=' + this.name + '&email=' + this.email +
      '&phone=' + this.phone + '&message=' + this.message;
    this._apiService.contactUs(body).subscribe(data => {
      document.getElementById('statusMessage').innerHTML = JSON.parse(data)[0].message;
    });
  }

}
