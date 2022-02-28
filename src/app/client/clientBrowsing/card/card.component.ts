

import { Component, OnInit,Type,Input } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

// import { Component, Input, OnInit } from '@angular/core';
import { Bussiness } from 'src/app/models/service.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})  
export class CardComponent implements OnInit {


  @Input ()
  businesses: Bussiness[] = [
   { id: 1,
    name: "string",
    type:" string",
    opensAt: "string",
    closesAt: "string",
    package_name: "string",
    phone_number: "string",
    package_description: "string",
    package_price: "string",
    address: "string"},
   { id: 1,
    name: "string",
    type:" string",
    opensAt: "string",
    closesAt: "string",
    package_name: "string",
    phone_number: "string",
    package_description: "string",
    package_price: "string",
    address: "string"}
  ];
  ngOnInit(): void {

  }  


  withAutofocus = `<button type="button" class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;

  constructor(private _modalService: NgbModal) {}

  open(name: string) { this._modalService.open(MODALS[name]); }


  showDetails(): void {
    console.log("weeeeeeeeee")
  }  

}  




@Component({
  selector: ' service-card-details',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">
    {{businesses[0].name}}
    </h4>
    <button type="button" class="btn-close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')"></button>
  </div>
  <div class="modal-body">
    <p>
    <span *ngIf="business">
      Type:
      </span>
    <br>
    <span>
      Opens At:
      
      </span>
  
    <br>
    <span>
      Closes At:
      
      </span>
  
    <br>
    <span>
      Package Name:
      
      </span>
  
    <br>
    <span>
      Phone Number:
      
      </span>
  
    <br>
    <span>
      
      Package Description:
      </span>
  
    <br>
    <span>
      package Price: L.E
      
      </span>
    <br>
    <span>
      Address:

    </span>


  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-danger" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-primary btn-outline-primary" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class  ServiceCardDetails {
  constructor(public modal: NgbActiveModal) {}
  @Input() businesses:Bussiness[]=[
    { id: 1,
      name: "Doha",
      type:" string",
      opensAt: "string",
      closesAt: "string",
      package_name: "string",
      phone_number: "string",
      package_description: "string",
      package_price: "string",
      address: "string"}

  ]
}

const MODALS: {[name: string]: Type<any>} = {

  autofocus: ServiceCardDetails
};

























