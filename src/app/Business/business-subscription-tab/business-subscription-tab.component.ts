import { Component, OnInit } from '@angular/core';
import { BusinessSubsciption } from 'src/app/_models/businessSubscription.model';

@Component({
  selector: 'app-business-subscription-tab',
  templateUrl: './business-subscription-tab.component.html',
  styleUrls: ['./business-subscription-tab.component.scss']
})
export class BusinessSubscriptionTabComponent implements OnInit {
  packages:BusinessSubsciption[]=
  [
    {
    id:1,
    packageName:"pack one",
    createdAt:"2020-02-25",
    status:"status one"
  },
    {
    id:2,
    packageName:"pack two",
    createdAt:"2020-02-25",
    status:"status two"
  },
    {
    id:3,
    packageName:"pack three",
    createdAt:"2020-02-25",
    status:"status three"
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
