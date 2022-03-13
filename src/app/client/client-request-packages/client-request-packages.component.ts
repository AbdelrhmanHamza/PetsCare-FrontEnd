import { Component, OnInit } from '@angular/core';
import { ServicePakage } from 'app/models/service-pakage.model';

@Component({
  selector: 'app-client-request-packages',
  templateUrl: './client-request-packages.component.html',
  styleUrls: ['./client-request-packages.component.scss']
})
export class ClientRequestPackagesComponent implements OnInit {
packages!:ServicePakage[];
  constructor() { }

  ngOnInit(): void {
  }

}
