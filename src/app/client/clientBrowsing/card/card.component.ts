import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bussiness } from 'app/models/service.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(    private router: Router
    ) { }

  @Input ()
  businesses: Bussiness[] = [];
  ngOnInit(): void {

  }
  onDetails(id:any){
    this.router.navigate(['/businesses/details/',id]);
  }
 
}
