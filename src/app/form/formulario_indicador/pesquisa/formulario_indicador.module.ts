import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Formulario_indicadorComponent } from './formulario_indicador.component'; import { formulario_indicador_routing } from './formulario_indicador.routing';  @NgModule({   imports:      [ CommonModule, formulario_indicador_routing, SharedModule],   declarations: [ Formulario_indicadorComponent ],   exports:      [ Formulario_indicadorComponent ] }) export class Formulario_indicadorModule { }