import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Avaliacao_reuniaoComponent } from './avaliacao_reuniao.component'; import { avaliacao_reuniao_routing } from './avaliacao_reuniao.routing';  @NgModule({   imports:      [ CommonModule, avaliacao_reuniao_routing, SharedModule],   declarations: [ Avaliacao_reuniaoComponent ],   exports:      [ Avaliacao_reuniaoComponent ] }) export class Avaliacao_reuniaoModule { }