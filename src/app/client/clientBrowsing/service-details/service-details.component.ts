import { Component, OnInit } from '@angular/core';
import { Bussiness } from 'src/app/models/service.model';
export interface ImagesUrls{
  src:string
}
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

  sources:ImagesUrls[]=[
    {src:"../../../../assets/img/team-1.jpg"},
    {src:"../../../../assets/img/team-2.jpg"},
    {src:"../../../../assets/img/blog-1.jpg"},
    {src:"../../../../assets/img/blog-2.jpg"},
 
  ]
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
