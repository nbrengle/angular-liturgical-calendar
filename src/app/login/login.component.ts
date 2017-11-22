import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { AccountService } from '../services/account.service';
import { UserAuth } from '../models/user-auth.model';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
} from '@angular/router';
import { GoogleAnalyticsService } from 'angular-ga';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  success: boolean;
  loginAttempted: boolean;
  returnUrl: string;
  loginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(
    private _fb: FormBuilder,
    private _accountService: AccountService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _gaService: GoogleAnalyticsService
  ) {
    this.loginForm = _fb.group({
      'username' : ['', Validators.required],
      'password' : ['', Validators.required],
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];

    this.loginAttempted = false;
  }

  handleButtonPress(loginPressed: boolean) {
    loginPressed ? this.attemptLogin() : this.forgotPassword();
  }

  attemptLogin(): void {
    console.log('Login Attempted');
    const userAttempt = new UserAuth(this.loginForm.value.username,
                                     this.loginForm.value.password
                                    );
    this.success = this._accountService.attemptLogin(userAttempt);
    this.loginAttempted = true;
    this._gaService.event.emit({
      category: 'account',
      action: 'login'
    });
    if (this.success === true) {
      this._router.navigateByUrl(this.returnUrl);
    }
  }

  forgotPassword(): void { console.log('I forgot!'); }

  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }
}
