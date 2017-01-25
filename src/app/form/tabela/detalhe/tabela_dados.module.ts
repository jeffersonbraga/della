import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { TabelaDadosComponent } from './tabela_dados.component'; import { TabelaDadosDetailsComponent } from './tabela_dadosDetails.component'; import { TabelaDadosEditComponent } from './tabela_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { tabela_dados_routing } from './tabela_dados.routing';  @NgModule({   imports:      [ CommonModule, tabela_dados_routing, SharedModule ],   declarations: [ TabelaDadosComponent, TabelaDadosDetailsComponent,                   TabelaDadosEditComponent ] }) export default class AppModule { }