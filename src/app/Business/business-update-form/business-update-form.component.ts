import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddBusinessForm } from 'src/app/models/add-business-form';



@Component({
  selector: 'app-business-update-form',
  templateUrl: './business-update-form.component.html',
  styleUrls: ['./business-update-form.component.scss']
})
export class BusinessUpdateFormComponent implements OnInit {
  businessDetails:AddBusinessForm={
    businessname:"Doha",
    description:"Da7do7a",
    businesstype:"Vet",
    phoneNum:"0100165464",
    city:"Alex",
    state:"Alex2 :P ",
    address:"Alex :P :P :P ",
    openat:"6:00 am",
    closeat:"7:00 pm"}
  
    registForm = new FormGroup({
      businessname:new FormControl(this.businessDetails.businessname,[Validators.required]),
      description:new FormControl(this.businessDetails.description,[Validators.required]),
      businesstype:new FormControl('',[Validators.required]),
      phoneNum:new FormControl(this.businessDetails.phoneNum,[Validators.required]),
      city:new FormControl(this.businessDetails.city,[Validators.required]),
      state: new FormControl(this.businessDetails.state,[Validators.required]),
      address: new FormControl(this.businessDetails.address,[Validators.required]),
      openat: new FormControl(this.businessDetails.openat,[Validators.required]),
      closeat: new FormControl(this.businessDetails.closeat,[Validators.required]),
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
    getAndPostData(){
      let registerModel:AddBusinessForm =<AddBusinessForm>this.registForm.value;
      //call api
      console.log(registerModel);
  
    //  console.log(this.registForm.value);
     }
  }
  