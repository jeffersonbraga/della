import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Pessoa_juridicaComponent } from './pessoa_juridica.component'; import { pessoa_juridica_routing } from './pessoa_juridica.routing';  @NgModule({   imports:      [ CommonModule, pessoa_juridica_routing, SharedModule],   declarations: [ Pessoa_juridicaComponent ],   exports:      [ Pessoa_juridicaComponent ] }) export class Pessoa_juridicaModule { }