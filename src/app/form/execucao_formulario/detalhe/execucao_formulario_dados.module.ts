import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Execucao_formularioDadosComponent } from './execucao_formulario_dados.component'; import { Execucao_formularioDadosDetailsComponent } from './execucao_formulario_dadosDetails.component'; import { Execucao_formularioDadosEditComponent } from './execucao_formulario_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { execucao_formulario_dados_routing } from './execucao_formulario_dados.routing';  @NgModule({   imports:      [ CommonModule, execucao_formulario_dados_routing, SharedModule ],   declarations: [ Execucao_formularioDadosComponent, Execucao_formularioDadosDetailsComponent,                   Execucao_formularioDadosEditComponent ] }) export default class AppModule { }