import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Permissao_acesso_documentoComponent } from './permissao_acesso_documento.component'; import { permissao_acesso_documento_routing } from './permissao_acesso_documento.routing';  @NgModule({   imports:      [ CommonModule, permissao_acesso_documento_routing, SharedModule],   declarations: [ Permissao_acesso_documentoComponent ],   exports:      [ Permissao_acesso_documentoComponent ] }) export class Permissao_acesso_documentoModule { }