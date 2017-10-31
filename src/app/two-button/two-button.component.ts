import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'two-button',
  template: `
  <span>
    <button class="ui green button">
      {{ green }}
    </button>
    <button class="ui button">
      {{ grey }}
    </button>
  </span>
  `
})
export class TwoButtonComponent implements OnInit {
    @Input() green: string;
    @Input() grey: string;

  constructor() { }

  ngOnInit() {
  }

}
