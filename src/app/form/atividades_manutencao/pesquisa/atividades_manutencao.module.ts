import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Atividades_manutencaoComponent } from './atividades_manutencao.component'; import { atividades_manutencao_routing } from './atividades_manutencao.routing';  @NgModule({   imports:      [ CommonModule, atividades_manutencao_routing, SharedModule],   declarations: [ Atividades_manutencaoComponent ],   exports:      [ Atividades_manutencaoComponent ] }) export class Atividades_manutencaoModule { }