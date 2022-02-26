import { AuthService } from 'src/app/services/auth.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
    user_name : null,
    type:null
  };
  constructor( private authService: AuthService) { }

  ngOnInit(): void {

  }
  onSubmit(): void {
    // const { email, user_name,password,password_confirmation,type } = this.form;
    console.log(this.form);
    let user:User = {
      email: this.form.email,
      password: this.form.password,
      user_name: this.form.user_name,
      type: this.form.type,
      password_confirmation: this.form.password_confirmation
    }
    this.authService.register(user).subscribe(
      (data) => {},
      (err) => {
        console.log(err.error.email);
      }
    );
  }
}
