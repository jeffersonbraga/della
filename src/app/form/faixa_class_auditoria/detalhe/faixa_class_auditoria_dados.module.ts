import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Faixa_class_auditoriaDadosComponent } from './faixa_class_auditoria_dados.component'; import { Faixa_class_auditoriaDadosDetailsComponent } from './faixa_class_auditoria_dadosDetails.component'; import { Faixa_class_auditoriaDadosEditComponent } from './faixa_class_auditoria_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { faixa_class_auditoria_dados_routing } from './faixa_class_auditoria_dados.routing';  @NgModule({   imports:      [ CommonModule, faixa_class_auditoria_dados_routing, SharedModule ],   declarations: [ Faixa_class_auditoriaDadosComponent, Faixa_class_auditoriaDadosDetailsComponent,                   Faixa_class_auditoriaDadosEditComponent ] }) export default class AppModule { }