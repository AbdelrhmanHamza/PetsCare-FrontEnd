import { Component, OnInit } from '@angular/core';
import { Package } from 'app/models/package.model';

@Component({
  selector: 'app-client-request-packages',
  templateUrl: './client-request-packages.component.html',
  styleUrls: ['./client-request-packages.component.scss']
})
export class ClientRequestPackagesComponent implements OnInit {
packages!:Package[];
  constructor() { }

  ngOnInit(): void {
  }

}
