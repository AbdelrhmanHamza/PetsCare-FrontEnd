import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/models/user.model';
import { TokenStorageService } from 'app/services/token-storage.service';


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  user!:User;
  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.user=this.tokenStorage.getUser();
    }
  }
   
 

    profileForm =  new FormGroup({
      client_name: new FormControl(this.user.user_name, [Validators.required]),
      client_email: new FormControl(this.user.email, [Validators.required]),
      phone_number: new FormControl(this.user.phone, [Validators.required]),
    
    });

    getAndPostData(){
      let clientModel:User =<User>this.profileForm.value;
      //call api
      console.log(clientModel);

    //  console.log(this.profileForm.value);
     }
     get name() {
      return this.profileForm.get('client_name');
    }
    get email() {
      return this.profileForm.get('client_email');
    }
   
    get phoneNum() {
      return this.profileForm.get('phone_number');
    }
    


  // logout(): void {
  //   this.tokenStorage.signOut();
  //   window.location.reload();
  // }
}
