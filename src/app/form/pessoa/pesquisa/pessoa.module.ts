import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { PessoaComponent } from './pessoa.component'; import { pessoa_routing } from './pessoa.routing';  @NgModule({   imports:      [ CommonModule, pessoa_routing, SharedModule],   declarations: [ PessoaComponent ],   exports:      [ PessoaComponent ] }) export class PessoaModule { }