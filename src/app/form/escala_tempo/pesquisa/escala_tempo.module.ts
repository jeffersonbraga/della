import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Escala_tempoComponent } from './escala_tempo.component'; import { escala_tempo_routing } from './escala_tempo.routing';  @NgModule({   imports:      [ CommonModule, escala_tempo_routing, SharedModule],   declarations: [ Escala_tempoComponent ],   exports:      [ Escala_tempoComponent ] }) export class Escala_tempoModule { }