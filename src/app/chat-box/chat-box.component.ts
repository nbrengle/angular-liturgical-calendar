import { Component, Input, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
})
export class ChatBoxComponent implements OnInit {

  @Input() loggedInUserId: string;
  @Input() messages: Array<Message>;

  constructor() {
  //Dummy Data
  this.loggedInUserId = "1";
  this.messages = [];
  this.messages.push(new Message("2", "How can I help?"));
  this.messages.push(new Message("1", "I'm not sure this makes any sense."));
  this.messages.push(new Message("2", "Thankfully it's just test data"));
  this.messages.push(new Message("1", "Good point!"));
  }

  postMessage (new_message_text:HTMLInputElement): boolean {
      this.messages.push(new Message(this.loggedInUserId, new_message_text.value));
      new_message_text.value = '';
      return false;
  }

  ngOnInit() {
  }

}
