import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Pergunta_auditoriaComponent } from './pergunta_auditoria.component'; import { pergunta_auditoria_routing } from './pergunta_auditoria.routing';  @NgModule({   imports:      [ CommonModule, pergunta_auditoria_routing, SharedModule],   declarations: [ Pergunta_auditoriaComponent ],   exports:      [ Pergunta_auditoriaComponent ] }) export class Pergunta_auditoriaModule { }