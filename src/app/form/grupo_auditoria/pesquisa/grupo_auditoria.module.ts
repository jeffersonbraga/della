import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Grupo_auditoriaComponent } from './grupo_auditoria.component'; import { grupo_auditoria_routing } from './grupo_auditoria.routing';  @NgModule({   imports:      [ CommonModule, grupo_auditoria_routing, SharedModule],   declarations: [ Grupo_auditoriaComponent ],   exports:      [ Grupo_auditoriaComponent ] }) export class Grupo_auditoriaModule { }