import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Resposta_auditoriaDadosComponent } from './resposta_auditoria_dados.component'; import { Resposta_auditoriaDadosDetailsComponent } from './resposta_auditoria_dadosDetails.component'; import { Resposta_auditoriaDadosEditComponent } from './resposta_auditoria_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { resposta_auditoria_dados_routing } from './resposta_auditoria_dados.routing';  @NgModule({   imports:      [ CommonModule, resposta_auditoria_dados_routing, SharedModule ],   declarations: [ Resposta_auditoriaDadosComponent, Resposta_auditoriaDadosDetailsComponent,                   Resposta_auditoriaDadosEditComponent ] }) export default class AppModule { }