import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Resolucao_ocorrenciaComponent } from './resolucao_ocorrencia.component'; import { resolucao_ocorrencia_routing } from './resolucao_ocorrencia.routing';  @NgModule({   imports:      [ CommonModule, resolucao_ocorrencia_routing, SharedModule],   declarations: [ Resolucao_ocorrenciaComponent ],   exports:      [ Resolucao_ocorrenciaComponent ] }) export class Resolucao_ocorrenciaModule { }