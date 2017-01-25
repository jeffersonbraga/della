import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../../shared/shared.module';
import { Mapa_pontosComponent } from './mapa_pontos.component';
import { mapa_pontos_routing } from './mapa_pontos.routing';

@NgModule({
  imports:      [ CommonModule, mapa_pontos_routing, SharedModule],
  declarations: [ Mapa_pontosComponent ],
  exports:      [ Mapa_pontosComponent ]
})
export class Mapa_pontosModule { }