import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
// import { CoreModule }   from '../core/core.module';
import { HomeComponent } from './home.component';
import { home_routing } from './home.routing';

@NgModule({
  imports:      [ CommonModule, home_routing, SharedModule], //, CoreModule ],
  declarations: [ HomeComponent ],
  exports:      [ HomeComponent ]
})
export class HomeModule { }