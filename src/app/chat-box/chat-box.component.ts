import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'chat-box',
  templateUrl: './chat-box.component.html',
})
export class ChatBoxComponent implements OnInit {

  Messages: Array<Message>;

  constructor() { }

  ngOnInit() {
  }

}
