import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Configuracao_helpdeskDadosComponent } from './configuracao_helpdesk_dados.component'; import { Configuracao_helpdeskDadosDetailsComponent } from './configuracao_helpdesk_dadosDetails.component'; import { Configuracao_helpdeskDadosEditComponent } from './configuracao_helpdesk_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { configuracao_helpdesk_dados_routing } from './configuracao_helpdesk_dados.routing';  @NgModule({   imports:      [ CommonModule, configuracao_helpdesk_dados_routing, SharedModule ],   declarations: [ Configuracao_helpdeskDadosComponent, Configuracao_helpdeskDadosDetailsComponent,                   Configuracao_helpdeskDadosEditComponent ] }) export default class AppModule { }