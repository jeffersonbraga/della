import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Manutencao_preventivaDadosComponent } from './manutencao_preventiva_dados.component'; import { Manutencao_preventivaDadosDetailsComponent } from './manutencao_preventiva_dadosDetails.component'; import { Manutencao_preventivaDadosEditComponent } from './manutencao_preventiva_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { manutencao_preventiva_dados_routing } from './manutencao_preventiva_dados.routing';  @NgModule({   imports:      [ CommonModule, manutencao_preventiva_dados_routing, SharedModule ],   declarations: [ Manutencao_preventivaDadosComponent, Manutencao_preventivaDadosDetailsComponent,                   Manutencao_preventivaDadosEditComponent ] }) export default class AppModule { }