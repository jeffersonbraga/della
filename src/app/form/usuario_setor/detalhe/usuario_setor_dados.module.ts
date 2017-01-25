import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Usuario_setorDadosComponent } from './usuario_setor_dados.component'; import { Usuario_setorDadosDetailsComponent } from './usuario_setor_dadosDetails.component'; import { Usuario_setorDadosEditComponent } from './usuario_setor_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { usuario_setor_dados_routing } from './usuario_setor_dados.routing';  @NgModule({   imports:      [ CommonModule, usuario_setor_dados_routing, SharedModule ],   declarations: [ Usuario_setorDadosComponent, Usuario_setorDadosDetailsComponent,                   Usuario_setorDadosEditComponent ] }) export default class AppModule { }