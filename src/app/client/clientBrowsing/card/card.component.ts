import { Component, Input, OnInit } from '@angular/core';
import { Bussiness } from 'src/app/_models/service.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input ()
  businesses: Bussiness[] = [];
  ngOnInit(): void {

  }

  showDetails(): void {
    console.log("weeeeeeeeee")
  }

}
