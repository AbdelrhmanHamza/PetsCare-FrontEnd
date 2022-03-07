import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ClientAddPetForm } from 'app/models/client-add-pet-form';

@Component({
  selector: 'app-client-add-pet-form',
  templateUrl: './client-add-pet-form.component.html',
  styleUrls: ['./client-add-pet-form.component.scss']
})
export class ClientAddPetFormComponent implements OnInit {
  registForm = new FormGroup({
    pet_type:new FormControl('',[Validators.required]),
    pet_breed:new FormControl('',[Validators.required]),
    pet_age:new FormControl('',[Validators.required]),
    has_medical_condition:new FormControl('',[Validators.required]),
  });
  get pet_type()
{
  return this.registForm.get('pet_type');
};
get pet_breed()
{
  return this.registForm.get('pet_breed');
};
get pet_age()
{
  return this.registForm.get('pet_age');
};
get has_medical_condition(){
  return this.registForm.get('has_medical_condition')
};
  constructor() { }

  ngOnInit(): void {
  }

  getdata(){
    let registerModel:ClientAddPetForm =<ClientAddPetForm>this.registForm.value;
    //call api
    console.log(registerModel);
    
  //  console.log(this.registForm.value);
   }
}
