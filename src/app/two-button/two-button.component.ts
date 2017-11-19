import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-two-button',
  template: `
  <span>
    <button class="ui green button"
      (click)="buttonPress(true)"
    >
      {{ green }}
    </button>
    <button class="ui button"
    (click)="buttonPress(false)"
    >
      {{ grey }}
    </button>
  </span>
  `
})
export class TwoButtonComponent {
    @Input() green: string;
    @Input() grey: string;

    @Output() onButtonPress = new EventEmitter<boolean>();

    buttonPress(greenButtonPressed: boolean) {
      this.onButtonPress.emit(greenButtonPressed);
    }

  constructor() { }


}
