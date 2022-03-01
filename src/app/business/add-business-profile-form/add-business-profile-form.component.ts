import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddBusinessForm } from 'app/models/add-business-form';
import { BusinessProfileService } from 'app/services/business-profile.service';
@Component({
  selector: 'app-add-business-profile-form',
  templateUrl: './add-business-profile-form.component.html',
  styleUrls: ['./add-business-profile-form.component.scss'],
})
export class AddBusinessProfileFormComponent implements OnInit {
  newBusiness = new FormGroup({
    business_name: new FormControl('', [Validators.required]),
    service_description: new FormControl('', [Validators.required]),
    business_type: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    open_at: new FormControl('', [Validators.required]),
    close_at: new FormControl('', [Validators.required]),
  });

  constructor(private businessProfileService: BusinessProfileService, private router: Router ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.businessProfileService
      .addBusiness(<AddBusinessForm>this.newBusiness.value)
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
    return this.newBusiness.get('business_name');
  }
  get description() {
    return this.newBusiness.get('service_description');
  }
  get businesstype() {
    return this.newBusiness.get('business_type');
  }
  get phoneNum() {
    return this.newBusiness.get('phone_number');
  }
  get address() {
    return this.newBusiness.get('address');
  }
  get openat() {
    return this.newBusiness.get('open_at');
  }
  get closeat() {
    return this.newBusiness.get('close_at');
  }
}
