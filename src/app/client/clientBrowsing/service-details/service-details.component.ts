import { Component, OnInit } from '@angular/core';
import { Bussiness } from 'src/app/models/service.model';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
serviceDetails:Bussiness={
 
  name: "Doha",
  type: "Vet",
  opensAt: "always opened",
  closesAt: "always closed :P ",
  package_name: "Pack da7do7",
  phone_number: "01000000",
  package_description: "isn't it obvious ?? >(",
  package_price: "msh el price nuber leh 3amleno string ",
  address: "Hereeeeeeeeeeeeeeeeeeeeee"
  
}
  constructor() { }

  ngOnInit(): void {
  }

}
