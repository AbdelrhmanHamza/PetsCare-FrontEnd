import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientProfile } from 'app/models/client-profile.model';
import { User } from 'app/models/user.model';
import { ClientProfileService } from 'app/services/client-profile.service';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss'],
})
export class ClientProfileComponent implements OnInit {
  user: ClientProfile = {
    address: '',
    first_name: '',
    id: 0,
    last_name: '',
    phone_number: '',
  };
  profileForm = new FormGroup({
    client_first_name: new FormControl(this.user.first_name, [
      Validators.required,
    ]),
    client_last_name: new FormControl(this.user.last_name, [
      Validators.required,
    ]),
    address: new FormControl(this.user.address, [Validators.required]),
    phone_number: new FormControl(this.user.phone_number, [
      Validators.required,
    ]),
  });
  constructor(
    private tokenStorage: TokenStorageService,
    private clientProfile: ClientProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.clientProfile.getProfile().subscribe(
        (data) => {
          console.log(data);
          this.profileForm = new FormGroup({
            client_first_name: new FormControl(data.first_name, [
              Validators.required,
            ]),
            client_last_name: new FormControl(data.last_name, [
              Validators.required,
            ]),
            address: new FormControl(data.address, [Validators.required]),
            phone_number: new FormControl(data.phone_number, [
              Validators.required,
            ]),
          });
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.router.navigate(['/']);
    }
  }

  getAndPostData() {
    let clientModel: User = <User>this.profileForm.value;
    //call api
    console.log(clientModel);

    //  console.log(this.profileForm.value);
  }

  get fname() {
    return this.profileForm.get('first_name');
  }
  get lname() {
    return this.profileForm.get('last_name');
  }
  get address() {
    return this.profileForm.get('address');
  }

  get phoneNum() {
    return this.profileForm.get('phone_number');
  }
}
