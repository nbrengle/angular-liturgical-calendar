import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      'username' : ['', Validators.required],
      'password' : ['', Validators.required],
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }

  handleButtonPress(loginPressed: boolean) {
    loginPressed ? this.attemptLogin() : this.forgotPassword();
  }

  attemptLogin() {
    console.log('pis');
  }

  forgotPassword() { console.log('I forgot!'); }

  ngOnInit() {
  }

}
