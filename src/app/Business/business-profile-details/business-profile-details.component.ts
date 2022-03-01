import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-business-profile-details',
  templateUrl: './business-profile-details.component.html',
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./business-profile-details.component.scss']
})
export class BusinessProfileDetailsComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  addpackage(){
    // add package
  }
  updateprofile(){
    // update profile
  }
  updateimage(){
    // update image
  }
  openLg(contentt:any) {
    this.modalService.open(contentt, { size: 'lg' });
    // delete of package
  }
  open(content:any) {
    this.modalService.open(content);
    //add package
  }

  ngOnInit(): void {
  }

}
