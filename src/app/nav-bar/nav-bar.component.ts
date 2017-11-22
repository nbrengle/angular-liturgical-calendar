import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
  <div class="ui secondary menu">
    <a  class="item"
        routerLink="/search"
        routerLinkActive="active"
    > Home </a>
    <a  class="item"
        routerLink="profile"
        routerLinkActive="active"
    > Profile </a>
    <div class="right menu">
        <a  class="item"
            routerLink="/login"
            routerLinkActive="active"
        > Login </a>
    </div>
  </div>
  `
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
