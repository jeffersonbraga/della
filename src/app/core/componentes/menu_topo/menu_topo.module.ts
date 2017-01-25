import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../../../shared/shared.module';
import { Menu_topoComponent } from './menu_topo.component';

@NgModule({
  imports:      [ CommonModule, SharedModule],
  declarations: [ Menu_topoComponent ],
  exports:      [ Menu_topoComponent ]
})
export class Menu_topoModule { }