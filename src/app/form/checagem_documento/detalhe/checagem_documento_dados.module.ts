import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Checagem_documentoDadosComponent } from './checagem_documento_dados.component'; import { Checagem_documentoDadosDetailsComponent } from './checagem_documento_dadosDetails.component'; import { Checagem_documentoDadosEditComponent } from './checagem_documento_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { checagem_documento_dados_routing } from './checagem_documento_dados.routing';  @NgModule({   imports:      [ CommonModule, checagem_documento_dados_routing, SharedModule ],   declarations: [ Checagem_documentoDadosComponent, Checagem_documentoDadosDetailsComponent,                   Checagem_documentoDadosEditComponent ] }) export default class AppModule { }