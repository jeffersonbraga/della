import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Participantes_treinamentoDadosComponent } from './participantes_treinamento_dados.component'; import { Participantes_treinamentoDadosDetailsComponent } from './participantes_treinamento_dadosDetails.component'; import { Participantes_treinamentoDadosEditComponent } from './participantes_treinamento_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { participantes_treinamento_dados_routing } from './participantes_treinamento_dados.routing';  @NgModule({   imports:      [ CommonModule, participantes_treinamento_dados_routing, SharedModule ],   declarations: [ Participantes_treinamentoDadosComponent, Participantes_treinamentoDadosDetailsComponent,                   Participantes_treinamentoDadosEditComponent ] }) export default class AppModule { }