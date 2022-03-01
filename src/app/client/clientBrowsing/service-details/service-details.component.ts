import { Component, OnInit } from '@angular/core';
import { Bussiness } from 'src/app/models/service.model';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
serviceDetails:Bussiness={
  
}
  constructor() { }

  ngOnInit(): void {
  }

}
