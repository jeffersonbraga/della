import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Causa_efeitoDadosComponent } from './causa_efeito_dados.component'; import { Causa_efeitoDadosDetailsComponent } from './causa_efeito_dadosDetails.component'; import { Causa_efeitoDadosEditComponent } from './causa_efeito_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { causa_efeito_dados_routing } from './causa_efeito_dados.routing';  @NgModule({   imports:      [ CommonModule, causa_efeito_dados_routing, SharedModule ],   declarations: [ Causa_efeitoDadosComponent, Causa_efeitoDadosDetailsComponent,                   Causa_efeitoDadosEditComponent ] }) export default class AppModule { }