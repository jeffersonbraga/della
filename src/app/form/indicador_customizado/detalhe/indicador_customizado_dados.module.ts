import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Indicador_customizadoDadosComponent } from './indicador_customizado_dados.component'; import { Indicador_customizadoDadosDetailsComponent } from './indicador_customizado_dadosDetails.component'; import { Indicador_customizadoDadosEditComponent } from './indicador_customizado_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { indicador_customizado_dados_routing } from './indicador_customizado_dados.routing';  @NgModule({   imports:      [ CommonModule, indicador_customizado_dados_routing, SharedModule ],   declarations: [ Indicador_customizadoDadosComponent, Indicador_customizadoDadosDetailsComponent,                   Indicador_customizadoDadosEditComponent ] }) export default class AppModule { }