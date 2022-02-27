import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddBusinessForm } from 'src/app/models/add-business-form';
@Component({
  selector: 'app-add-business-profile-form',
  templateUrl: './add-business-profile-form.component.html',
  styleUrls: ['./add-business-profile-form.component.scss']
})
export class AddBusinessProfileFormComponent implements OnInit {
  registForm = new FormGroup({
    businessname:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    businesstype:new FormControl('',[Validators.required]),
    phoneNum:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    openat: new FormControl('',[Validators.required]),
    closeat: new FormControl('',[Validators.required]),
  });
  get businessname()
  {
    return this.registForm.get('businessname');
  };
  get description()
  {
    return this.registForm.get('description');
  };
  get businesstype()
  {
    return this.registForm.get('businesstype');
  };
  get phoneNum()
  {
    return this.registForm.get('phoneNum');
  };
  get city()
  {
    return this.registForm.get('city');
  };
  get state()
  {
    return this.registForm.get('state');
  };
  get address()
  {
    return this.registForm.get('address');
  };
  get openat(){
    return this.registForm.get('openat')
  };
  get closeat(){
    return this.registForm.get('closeat')
  };

  constructor() { }

  ngOnInit(): void {
  }



  getdata(){
      let registerModel:AddBusinessForm =<AddBusinessForm>this.registForm.value;
      //call api
      console.log(registerModel);

    //  console.log(this.registForm.value);
     }
}
