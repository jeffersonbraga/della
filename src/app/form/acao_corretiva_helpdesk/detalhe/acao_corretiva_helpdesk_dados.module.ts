import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Acao_corretiva_helpdeskDadosComponent } from './acao_corretiva_helpdesk_dados.component'; import { Acao_corretiva_helpdeskDadosDetailsComponent } from './acao_corretiva_helpdesk_dadosDetails.component'; import { Acao_corretiva_helpdeskDadosEditComponent } from './acao_corretiva_helpdesk_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { acao_corretiva_helpdesk_dados_routing } from './acao_corretiva_helpdesk_dados.routing';  @NgModule({   imports:      [ CommonModule, acao_corretiva_helpdesk_dados_routing, SharedModule ],   declarations: [ Acao_corretiva_helpdeskDadosComponent, Acao_corretiva_helpdeskDadosDetailsComponent,                   Acao_corretiva_helpdeskDadosEditComponent ] }) export default class AppModule { }