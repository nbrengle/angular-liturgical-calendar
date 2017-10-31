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
            <input type="text" placeholder="Username/Email">
        </div>
        <div class="field">
            <label>Password</label>
            <input type="text" placeholder="Password">
        </div>
    </div>
    <two-button green="Login" grey="Forgot Password"></two-button>
  </form>
  </div>
  `
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
