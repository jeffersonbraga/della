import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Treinamento_funcaoDadosComponent } from './treinamento_funcao_dados.component'; import { Treinamento_funcaoDadosDetailsComponent } from './treinamento_funcao_dadosDetails.component'; import { Treinamento_funcaoDadosEditComponent } from './treinamento_funcao_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { treinamento_funcao_dados_routing } from './treinamento_funcao_dados.routing';  @NgModule({   imports:      [ CommonModule, treinamento_funcao_dados_routing, SharedModule ],   declarations: [ Treinamento_funcaoDadosComponent, Treinamento_funcaoDadosDetailsComponent,                   Treinamento_funcaoDadosEditComponent ] }) export default class AppModule { }