import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Pergunta_avaliacao_ideiaComponent } from './pergunta_avaliacao_ideia.component'; import { pergunta_avaliacao_ideia_routing } from './pergunta_avaliacao_ideia.routing';  @NgModule({   imports:      [ CommonModule, pergunta_avaliacao_ideia_routing, SharedModule],   declarations: [ Pergunta_avaliacao_ideiaComponent ],   exports:      [ Pergunta_avaliacao_ideiaComponent ] }) export class Pergunta_avaliacao_ideiaModule { }