import { Component, OnInit } from '@angular/core';
import { Bussiness } from 'src/app/_models/service.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  serviceCardInfos:Bussiness[]=
  [
    { id:1,
      name:"Paul",
      type :"Vet",
      opensAt:"9:00",
      closesAt:"5:00"},
    { id:2,
      name:"Paul",
      type :"Vet",
      opensAt:"9:00",
      closesAt:"5:00"},
    { id:3,
      name:"Paul",
      type :"Vet",
      opensAt:"9:00",
      closesAt:"5:00"}
  ]

  ngOnInit(): void {
  }

  showDetails():void{
    console.log("weeeeeeeeee")
  }

}
