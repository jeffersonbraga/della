import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Participantes_reuniao_picComponent } from './participantes_reuniao_pic.component'; import { participantes_reuniao_pic_routing } from './participantes_reuniao_pic.routing';  @NgModule({   imports:      [ CommonModule, participantes_reuniao_pic_routing, SharedModule],   declarations: [ Participantes_reuniao_picComponent ],   exports:      [ Participantes_reuniao_picComponent ] }) export class Participantes_reuniao_picModule { }