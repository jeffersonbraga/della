import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Participantes_reuniaoComponent } from './participantes_reuniao.component'; import { participantes_reuniao_routing } from './participantes_reuniao.routing';  @NgModule({   imports:      [ CommonModule, participantes_reuniao_routing, SharedModule],   declarations: [ Participantes_reuniaoComponent ],   exports:      [ Participantes_reuniaoComponent ] }) export class Participantes_reuniaoModule { }