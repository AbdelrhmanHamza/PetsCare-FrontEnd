import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/models/package.model';

@Component({
  selector: 'app-business-packages',
  templateUrl: './business-packages.component.html',
  styleUrls: ['./business-packages.component.scss']
})
export class BusinessPackagesComponent implements OnInit {

  constructor() { }
  package:Package={
    name:"Free",
    description:"It is called free but you will pay 75% of the fees :P ",
    price:75
  }

  ngOnInit(): void {
  }

}
