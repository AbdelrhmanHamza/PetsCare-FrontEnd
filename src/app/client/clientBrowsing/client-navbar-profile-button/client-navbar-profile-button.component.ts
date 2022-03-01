import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-client-navbar-profile-button',
  templateUrl: './client-navbar-profile-button.component.html',
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./client-navbar-profile-button.component.scss']
})
export class ClientNavbarProfileButtonComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  profile(){
    // profile
  }
  mypets(){
    //mypets

  }
  myrequest(){
    //myrequest

  }
  
  open(content:any) {
    this.modalService.open(content);
    //add pet
  }
  
  openScrollableContent(longContent:any) {
    this.modalService.open(longContent, { scrollable: true });
    // details of package
  }
  openLg(contentt:any) {
    this.modalService.open(contentt, { size: 'lg' });
    // delete of package
  }

  ngOnInit(): void {
  }

}
