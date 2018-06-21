import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GitHubLinkAreaModule } from './../github-link-area/github-link-area.module';
import { MessageActionModule } from './actions/action.module';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [ MessageComponent ],
  imports: [ CommonModule, GitHubLinkAreaModule, MessageActionModule ],
  exports: [ MessageComponent ]
})
export class MessageModule {
  constructor() {}
}
