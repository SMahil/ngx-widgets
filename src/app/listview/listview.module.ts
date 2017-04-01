import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';

import { EmptyStateConfig } from './emptystate-config';
import { ListViewComponent } from './listview.component';
import { ListViewConfig } from './listview-config';
import { ListViewEvent } from './listview-event';

export {
  EmptyStateConfig,
  ListViewConfig,
  ListViewEvent
}

@NgModule({
  imports: [ CommonModule, BsDropdownModule, FormsModule ],
  declarations: [ ListViewComponent ],
  exports: [ ListViewComponent ]
})
export class ListViewModule { }