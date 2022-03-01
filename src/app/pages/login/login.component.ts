import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { UserType } from 'app/services/enums/user-type';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
  };
  user:User={
    email: '',
    password: '',
    user_name: '',
    type: '',
    password_confirmation: ''
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      let user = this.tokenStorage.getUser();
      if(user.type === UserType.BUSINESS){
        this.router.navigate(['/business/my-businesses']);
      }else
      this.router.navigate(['/businesses']);
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.user.email = email;
    this.user.password = password;
    this.authService.login(this.user).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.access_token);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.tokenStorage.saveUser(data.user);
        this.reloadPage();
    },
      (err) => {
        console.log(err.error.email);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
