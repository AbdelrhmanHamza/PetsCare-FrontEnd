import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
    user_name: null,
    type: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService,

  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.form);
    let user: User = {
      email: this.form.email,
      password: this.form.password,
      user_name: this.form.user_name,
      type: this.form.type,
      password_confirmation: this.form.password_confirmation
    }
    this.authService.register(user).subscribe(
      (data) => {
        console.log(data);
        this.tokenStorage.saveToken(data.access_token);
        this.isSignUpFailed = false;
        this.isSuccessful = true;
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.error);
        this.isSignUpFailed = true;
        this.isSuccessful = false;
      }
    );
  }
}
