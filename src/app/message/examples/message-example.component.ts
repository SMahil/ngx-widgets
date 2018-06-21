import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'message-example',
  templateUrl: './message-example.component.html',
  styleUrls: ['./message-example.component.less']
})
export class MessageExampleComponent {
  @Input() msgReplyAction: boolean = false;
  @Input() msgEditAction: boolean = false;
  @Input() msgDeleteAction: boolean = false;

  private content: string = `There is some text in here.
    And some checkboxes:<ul>
    <li><input type="checkbox" data-checkbox-index="0"></input>An Item.</li>
    <li><input type="checkbox" checked="" data-checkbox-index="1"></input>Checked Item.</li>
    </ul>
    For input events, see the browser console.<br>
    <a href="https://github.com/patternfly/patternfly-ng/issues/127">
    https://github.com/patternfly/patternfly-ng/issues/127</a>.
    And some more text. And another issue link:
    <a href="https://github.com/patternfly/patternfly-ng/issues/111" rel="nofollow">
    https://github.com/patternfly/patternfly-ng/issues/111</a>.
    And for testing purposes, the same link as the first as a dupe:
    <a href="https://github.com/patternfly/patternfly-ng/issues/127" rel="nofollow">
    https://github.com/patternfly/patternfly-ng/issues/127</a>.
    Note: the link html formatting is following the currently used OSIO server
    side link markdown formatting. It may need changes
    if used with a different markdown compiler`;

  constructor() {}
}
