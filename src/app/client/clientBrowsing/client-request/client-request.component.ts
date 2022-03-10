import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddBusinessForm } from 'src/app/models/add-business-form';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.scss']
})
export class ClientRequestComponent implements OnInit {
  registForm = new FormGroup({
    requestDescription:new FormControl('',[Validators.required]),
    requestDueDate:new FormControl('',[Validators.required]),
  
  });
  get requestDescription()
  {
    return this.registForm.get('requestDescription');
  };
  get requestDueDate()
  {
    return this.registForm.get('requestDueDate');
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
