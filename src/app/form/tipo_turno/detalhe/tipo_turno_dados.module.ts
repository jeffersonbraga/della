import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Tipo_turnoDadosComponent } from './tipo_turno_dados.component'; import { Tipo_turnoDadosDetailsComponent } from './tipo_turno_dadosDetails.component'; import { Tipo_turnoDadosEditComponent } from './tipo_turno_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { tipo_turno_dados_routing } from './tipo_turno_dados.routing';  @NgModule({   imports:      [ CommonModule, tipo_turno_dados_routing, SharedModule ],   declarations: [ Tipo_turnoDadosComponent, Tipo_turnoDadosDetailsComponent,                   Tipo_turnoDadosEditComponent ] }) export default class AppModule { }