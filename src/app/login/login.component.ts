import {
  Component,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { AccountService } from '../services/account.service';
import { UserAuth } from '../models/user-auth.model';


@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
})


export class LoginComponent {

  loginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(
    private _fb: FormBuilder,
    private _accountService: AccountService,
  ) {
    this.loginForm = _fb.group({
      'username' : ['', Validators.required],
      'password' : ['', Validators.required],
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }

  handleButtonPress(loginPressed: boolean) {
    loginPressed ? this.attemptLogin() : this.forgotPassword();
  }

  attemptLogin(): boolean {
    console.log('Login Attempted');
    const userAttempt = new UserAuth(this.loginForm.value.username,
                                     this.loginForm.value.password
                                    )
    return this._accountService.attemptLogin(userAttempt);
    }
  }

  forgotPassword() { console.log('I forgot!'); }

}
