import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Execucao_auditoriaDadosComponent } from './execucao_auditoria_dados.component'; import { Execucao_auditoriaDadosDetailsComponent } from './execucao_auditoria_dadosDetails.component'; import { Execucao_auditoriaDadosEditComponent } from './execucao_auditoria_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { execucao_auditoria_dados_routing } from './execucao_auditoria_dados.routing';  @NgModule({   imports:      [ CommonModule, execucao_auditoria_dados_routing, SharedModule ],   declarations: [ Execucao_auditoriaDadosComponent, Execucao_auditoriaDadosDetailsComponent,                   Execucao_auditoriaDadosEditComponent ] }) export default class AppModule { }