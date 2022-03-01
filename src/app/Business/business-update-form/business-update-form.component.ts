import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddBusinessForm } from 'app/models/add-business-form';



@Component({
  selector: 'app-business-update-form',
  templateUrl: './business-update-form.component.html',
  styleUrls: ['./business-update-form.component.scss']
})
export class BusinessUpdateFormComponent implements OnInit {
  businessDetails:AddBusinessForm={
    business_name:"Doha",
    service_description:"Da7do7a",
    business_type:"Vet",
    phone_number:"0100165464",
    address:"Alex :P :P :P ",
    open_at:"6:00 am",
    close_at:"7:00 pm"}

    registForm =  new FormGroup({
      business_name: new FormControl('', [Validators.required]),
      service_description: new FormControl('', [Validators.required]),
      business_type: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      open_at: new FormControl('', [Validators.required]),
      close_at: new FormControl('', [Validators.required]),
    });




    constructor() { }

    ngOnInit(): void {
    }
    getAndPostData(){
      let registerModel:AddBusinessForm =<AddBusinessForm>this.registForm.value;
      //call api
      console.log(registerModel);

    //  console.log(this.registForm.value);
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
