import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { ProfissaoDadosComponent } from './profissao_dados.component'; import { ProfissaoDadosDetailsComponent } from './profissao_dadosDetails.component'; import { ProfissaoDadosEditComponent } from './profissao_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { profissao_dados_routing } from './profissao_dados.routing';  @NgModule({   imports:      [ CommonModule, profissao_dados_routing, SharedModule ],   declarations: [ ProfissaoDadosComponent, ProfissaoDadosDetailsComponent,                   ProfissaoDadosEditComponent ] }) export default class AppModule { }