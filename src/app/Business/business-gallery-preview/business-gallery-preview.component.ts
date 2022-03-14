import { Component, Input, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  imgToBeDeleted: number = 0;
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
  confirmDelete(id: number) {
    this.delete = true;
    this.imgToBeDeleted = id;
  }
  onDelete() {
    this.delete = false;
  }
  onCancel() {
    this.delete = false;
  }
  onChange(event: any) {
    this.file = event.target.files[0];
    if (this.file != null) {
      this.Upload();
    }
  }
  onUpdateImg(event: any, id: number) {
    this.file = event.target.files[0];
    if (this.file != null) {
      this.UpdateImg(id);
    }
  }
  deleteImg() {
    console.log(this.imgToBeDeleted);
    this.businessImagesService.delete(this.imgToBeDeleted).subscribe(
      (data) => {
        window.location.reload();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  UpdateImg(id: number) {
    console.log(this.file);
    this.businessImagesService.update(this.file, id).subscribe(
      (data) => {
        window.location.reload();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  Upload() {
    console.log(this.file);
    this.businessImagesService.upload(this.file, this.id).subscribe(
      (data) => {
        window.location.reload();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  constructor(
    private tokenStorage: TokenStorageService,
    private businessImagesService: BusinessImagesService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
