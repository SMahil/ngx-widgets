import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { MessageActionModule } from './../actions/action.module';
import { MessageExampleComponent } from './message-example.component';
import { MessageModule } from './../message.module';

@NgModule({
  declarations: [
    MessageExampleComponent
  ],
  imports: [
    CommonModule,
    MessageModule,
    MessageActionModule
  ],
  exports: [ MessageExampleComponent ]
})
export class MessageExampleModule {
  constructor() {}
}
