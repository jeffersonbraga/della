import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../../shared/shared.module';
import { Rota_destinoComponent } from './rota_destino.component';
import { rota_destino_routing } from './rota_destino.routing';

@NgModule({
  imports:      [ CommonModule, rota_destino_routing, SharedModule],
  declarations: [ Rota_destinoComponent ],
  exports:      [ Rota_destinoComponent ]
})
export class Rota_destinoModule { }