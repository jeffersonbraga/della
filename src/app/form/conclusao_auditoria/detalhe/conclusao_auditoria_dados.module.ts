import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Conclusao_auditoriaDadosComponent } from './conclusao_auditoria_dados.component'; import { Conclusao_auditoriaDadosDetailsComponent } from './conclusao_auditoria_dadosDetails.component'; import { Conclusao_auditoriaDadosEditComponent } from './conclusao_auditoria_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { conclusao_auditoria_dados_routing } from './conclusao_auditoria_dados.routing';  @NgModule({   imports:      [ CommonModule, conclusao_auditoria_dados_routing, SharedModule ],   declarations: [ Conclusao_auditoriaDadosComponent, Conclusao_auditoriaDadosDetailsComponent,                   Conclusao_auditoriaDadosEditComponent ] }) export default class AppModule { }