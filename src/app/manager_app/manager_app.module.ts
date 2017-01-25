import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { Manager_appComponent } from './manager_app.component';
import { manager_app_routing } from './manager_app.routing';

@NgModule({
  imports:      [ CommonModule, manager_app_routing, SharedModule],
  declarations: [ Manager_appComponent ],
  exports:      [ Manager_appComponent ]
})
export default class AppModule { }