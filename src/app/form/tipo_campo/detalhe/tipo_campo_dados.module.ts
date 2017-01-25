import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Tipo_campoDadosComponent } from './tipo_campo_dados.component'; import { Tipo_campoDadosDetailsComponent } from './tipo_campo_dadosDetails.component'; import { Tipo_campoDadosEditComponent } from './tipo_campo_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { tipo_campo_dados_routing } from './tipo_campo_dados.routing';  @NgModule({   imports:      [ CommonModule, tipo_campo_dados_routing, SharedModule ],   declarations: [ Tipo_campoDadosComponent, Tipo_campoDadosDetailsComponent,                   Tipo_campoDadosEditComponent ] }) export default class AppModule { }