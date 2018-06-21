import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'message-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.less']
})
export class MessageActionComponent {
  @Input() msgReplyAction: boolean = false;
  @Input() msgEditAction: boolean = false;
  @Input() msgDeleteAction: boolean = false;

  constructor() {}
}
