import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { XComponent } from './x.component';
import { x_routing } from './x.routing';

@NgModule({
  imports:      [ CommonModule, x_routing, SharedModule],
  declarations: [ XComponent ],
  exports:      [ XComponent ]
})
export class XModule { }