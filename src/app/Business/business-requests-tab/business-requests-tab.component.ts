import { Component, OnInit } from '@angular/core';
import { BusinessRequest } from 'src/app/models/businessRequest.mode';

@Component({
  selector: 'app-business-requests-tab',
  templateUrl: './business-requests-tab.component.html',
  styleUrls: ['./business-requests-tab.component.scss']
})
export class BusinessRequestsTabComponent implements OnInit {
requests:BusinessRequest[]=[
  {
    user:"Doha",
    description:"this is a description of user Da7do7a",
    status:"read"
  },
  {
    user:"Amr",
    description:"this is a description of user Da7do7a  aywa kolo da7do7a",
    status:"unread"
  },
  {
    user:"Hamza",
    description:"this is a description of user Da7do7a  aywa kolo da7do7a",
    status:"unread"
  },
  {
    user:"Karen",
    description:"this is a description of user Da7do7a aywa kolo da7do7a",
    status:"unread"
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
