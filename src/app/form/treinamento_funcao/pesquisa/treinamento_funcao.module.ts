import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Treinamento_funcaoComponent } from './treinamento_funcao.component'; import { treinamento_funcao_routing } from './treinamento_funcao.routing';  @NgModule({   imports:      [ CommonModule, treinamento_funcao_routing, SharedModule],   declarations: [ Treinamento_funcaoComponent ],   exports:      [ Treinamento_funcaoComponent ] }) export class Treinamento_funcaoModule { }