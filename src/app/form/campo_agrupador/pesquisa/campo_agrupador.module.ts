import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Campo_agrupadorComponent } from './campo_agrupador.component'; import { campo_agrupador_routing } from './campo_agrupador.routing';  @NgModule({   imports:      [ CommonModule, campo_agrupador_routing, SharedModule],   declarations: [ Campo_agrupadorComponent ],   exports:      [ Campo_agrupadorComponent ] }) export class Campo_agrupadorModule { }