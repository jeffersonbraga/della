import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Descritivo_treinamentoDadosComponent } from './descritivo_treinamento_dados.component'; import { Descritivo_treinamentoDadosDetailsComponent } from './descritivo_treinamento_dadosDetails.component'; import { Descritivo_treinamentoDadosEditComponent } from './descritivo_treinamento_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { descritivo_treinamento_dados_routing } from './descritivo_treinamento_dados.routing';  @NgModule({   imports:      [ CommonModule, descritivo_treinamento_dados_routing, SharedModule ],   declarations: [ Descritivo_treinamentoDadosComponent, Descritivo_treinamentoDadosDetailsComponent,                   Descritivo_treinamentoDadosEditComponent ] }) export default class AppModule { }