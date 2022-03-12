import { Component, Input, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BusinessImg } from 'app/models/business-img.model';
import { BusinessImagesService } from 'app/services/business-images.service';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-business-gallery-preview',
  templateUrl: './business-gallery-preview.component.html',
  styleUrls: ['./business-gallery-preview.component.scss'],
})
export class BusinessGalleryPreviewComponent implements OnInit {
  delete = false;
  @Input()
  id: string = '';
  iconVisible = false;
  file: File | undefined;
  imgs: BusinessImg[] = [];
  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/']);
    } else {
      this.businessImagesService.getImages(this.id).subscribe(
        (data) => {
          data.users_image.forEach(
            (element: {
              id: number;
              image_path: string;
              image_name: string;
              business_profile_id: number;
            }) => {
              this.imgs.push({
                id: element.id,
                image_path: element.image_path,
                image_name: element.image_name,
                business_profile_id: element.business_profile_id,
              });
            }
          );
        },
        (err) => {
          console.log(err.error);
        }
      );
    }
  }
  mouseEnter() {
    console.log('mouse enter');
    this.iconVisible = true;
  }

  mouseLeave() {
    console.log('mouse leave');
    this.iconVisible = false;
  }
  confirmDelete() {
    this.delete = true;
  }
  onDelete() {
    this.delete = false;
  }
  onCancel() {
    this.delete = false;
  }
  onChange(event: any,id:any) {
    this.file = event.target.files[0];
    if (this.file != null) {
      this.Upload(id);
    }
  }
  Upload(id:any) {
    console.log(this.file);
    this.businessImagesService.upload(this.file, id).subscribe(
      (data) => {
        window.location.reload();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
  withAutofocus = `<button type="button" class="btn btn-danger"
  (click)="modal.close('Ok click')">Ok</button>`;

  constructor(
    private _modalService: NgbModal,
    private tokenStorage: TokenStorageService,
    private businessImagesService: BusinessImagesService,
    private router: Router
  ) {}

  open(name: string) {
    this._modalService.open(MODALS[name]);
  }
}

@Component({
  selector: ' delete-image',
  template: `
    <div style="margin-top=50%" class="modal-body">
      Are you sure you want to delete this picture?
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-danger"
        (click)="modal.dismiss('cancel click')"
      >
        Cancel
      </button>
      <button
        type="button"
        ngbAutofocus
        class="btn btn-primary btn-outline-primary"
        (click)="modal.close('Ok click')"
      >
        Ok
      </button>
    </div>
  `,
})
export class DeleteImage {
  constructor(public modal: NgbActiveModal) {}
}

const MODALS: { [name: string]: Type<any> } = {
  autofocus: DeleteImage,
};
