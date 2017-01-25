import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Plano_acao_auditoriaDadosComponent } from './plano_acao_auditoria_dados.component'; import { Plano_acao_auditoriaDadosDetailsComponent } from './plano_acao_auditoria_dadosDetails.component'; import { Plano_acao_auditoriaDadosEditComponent } from './plano_acao_auditoria_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { plano_acao_auditoria_dados_routing } from './plano_acao_auditoria_dados.routing';  @NgModule({   imports:      [ CommonModule, plano_acao_auditoria_dados_routing, SharedModule ],   declarations: [ Plano_acao_auditoriaDadosComponent, Plano_acao_auditoriaDadosDetailsComponent,                   Plano_acao_auditoriaDadosEditComponent ] }) export default class AppModule { }