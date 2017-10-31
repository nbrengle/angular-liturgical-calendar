import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  template: `
  <div class="ui container">
  <form class="ui form">
    <h4 class="ui diving header">Login</h4>
    <div class="fields">
        <div class="field">
            <label>Username/Email</label>
            <input #username type="text" placeholder="Username/Email">
        </div>
        <div class="field">
            <label>Password</label>
            <input #password type="text" placeholder="Password">
        </div>
    </div>
    <two-button green="Login" (click)="loginAttempt(username, password)"
                grey="Forgot Password" (click)="forgotPassword()"
    ></two-button>
  </form>
  </div>
  `
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginAttempt(username:HTMLInputElement, password:HTMLInputElement) { console.log("pis"); }
  forgotPassword() { console.log("I forgot!"); }

  ngOnInit() {
  }

}
