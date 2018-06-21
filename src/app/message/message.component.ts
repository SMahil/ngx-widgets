import { SafeHtml } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent {
  @Input() message: string | SafeHtml = '';
  @Input('placeholder') placeholder: string = 'Enter the text';

  @Input() msgReplyAction: boolean = false;
  @Input() msgEditAction: boolean = false;
  @Input() msgDeleteAction: boolean = false;
  constructor() {}
}
