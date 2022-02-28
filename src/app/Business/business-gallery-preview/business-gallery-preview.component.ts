import { Component, OnInit,Type } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-business-gallery-preview',
  templateUrl: './business-gallery-preview.component.html',
  styleUrls: ['./business-gallery-preview.component.scss']
})
export class BusinessGalleryPreviewComponent implements OnInit {
delete=false;
  

  ngOnInit(): void {
  }
  confirmDelete(){
    this.delete=true;
  }
  onDelete(){

    this.delete=false;
  }
  onCancel(){

    this.delete=false;
  }
  withAutofocus = `<button type="button" class="btn btn-danger"
  (click)="modal.close('Ok click')">Ok</button>`;

constructor(private _modalService: NgbModal) {}

open(name: string) { this._modalService.open(MODALS[name]); }

}


@Component({
  selector: ' delete-image',
  template: `

  
  <div style="margin-top=25%" class="modal-body">
    Are you sure you want to delete this picture?

  </div>
  <div  class="modal-footer">
    <button type="button" class="btn btn-danger" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-primary btn-outline-primary" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class  DeleteImage {
  constructor(public modal: NgbActiveModal) {}
  
}

const MODALS: {[name: string]: Type<any>} = {

  autofocus: DeleteImage
};
