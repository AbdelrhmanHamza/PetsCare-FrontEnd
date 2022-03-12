import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddBusinessForm } from 'app/models/add-business-form';
import { BusinessProfileService } from 'app/services/business-profile.service';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-business-update-form',
  templateUrl: './business-update-form.component.html',
  styleUrls: ['./business-update-form.component.scss'],
})
export class BusinessUpdateFormComponent implements OnInit {
  businessDetails: AddBusinessForm = {
    business_type: '',
    business_name: '',
    address: '',
    phone_number: '',
    service_description: '',
    open_at: '',
    close_at: '',
  };
  @Input()
  id: string = '';

  registForm = new FormGroup({
    business_name: new FormControl(this.businessDetails.business_name, [
      Validators.required,
    ]),
    service_description: new FormControl(
      this.businessDetails.service_description,
      [Validators.required]
    ),
    business_type: new FormControl(this.businessDetails.business_type, [
      Validators.required,
    ]),
    phone_number: new FormControl(this.businessDetails.phone_number, [
      Validators.required,
    ]),
    address: new FormControl(this.businessDetails.address, [
      Validators.required,
    ]),
    open_at: new FormControl(this.businessDetails.open_at, [
      Validators.required,
    ]),
    close_at: new FormControl(this.businessDetails.close_at, [
      Validators.required,
    ]),
  });

  constructor(
    private tokenStorage: TokenStorageService,
    private businessProfileService: BusinessProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/']);
    } else {
      this.businessProfileService.getBusinessByID(this.id).subscribe(
        (data) => {
          this.businessDetails = data;
          this.registForm = new FormGroup({
            business_name: new FormControl(this.businessDetails.business_name, [
              Validators.required,
            ]),
            service_description: new FormControl(
              this.businessDetails.service_description,
              [Validators.required]
            ),
            business_type: new FormControl(this.businessDetails.business_type, [
              Validators.required,
            ]),
            phone_number: new FormControl(this.businessDetails.phone_number, [
              Validators.required,
            ]),
            address: new FormControl(this.businessDetails.address, [
              Validators.required,
            ]),
            open_at: new FormControl(this.businessDetails.open_at, [
              Validators.required,
            ]),
            close_at: new FormControl(this.businessDetails.close_at, [
              Validators.required,
            ]),
          });
        },
        (err) => {
          console.log(err.error);
        }
      );
    }
  }
  getAndPostData() {
    this.businessProfileService
      .updateBusiness(<AddBusinessForm>this.registForm.value, this.id)
      .subscribe(
        (data) => {
          this.router.navigate(['/business/my-businesses']);
        },
        (err) => {
          console.log(err.error);
        }
      );
  }
  get businessname() {
    return this.registForm.get('business_name');
  }
  get description() {
    return this.registForm.get('service_description');
  }
  get businesstype() {
    return this.registForm.get('business_type');
  }
  get phoneNum() {
    return this.registForm.get('phone_number');
  }
  get address() {
    return this.registForm.get('address');
  }
  get openat() {
    return this.registForm.get('open_at');
  }
  get closeat() {
    return this.registForm.get('close_at');
  }
}
