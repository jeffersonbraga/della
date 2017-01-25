import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../../shared/shared.module';
import { Mapa_calorComponent } from './mapa_calor.component';
import { mapa_calor_routing } from './mapa_calor.routing';

@NgModule({
  imports:      [ CommonModule, mapa_calor_routing, SharedModule],
  declarations: [ Mapa_calorComponent ],
  exports:      [ Mapa_calorComponent ]
})
export class Mapa_calorModule { }