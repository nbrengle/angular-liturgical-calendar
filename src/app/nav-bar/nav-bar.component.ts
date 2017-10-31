import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
  <nav class="ui secondary menu">
    <a  class="item"
        routerLink="/search"
        routerLinkActive="active"
    > Home </a>
    <a  class="item"
        routerLink="settings"
        routerLinkActive="active"
    > Settings </a>
    <a  class="item"
        routerLink="/dashboard"
        routerLinkActive="active"
    > Dashboard </a>
    <div class="right menu">
        <a  class="item"
            routerLink="/login"
            routerLinkActive="active"
        > Login </a>
    </div>
  </nav>
  `
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
