import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Config_pesquisaComponent } from './config_pesquisa.component'; import { config_pesquisa_routing } from './config_pesquisa.routing';  @NgModule({   imports:      [ CommonModule, config_pesquisa_routing, SharedModule],   declarations: [ Config_pesquisaComponent ],   exports:      [ Config_pesquisaComponent ] }) export class Config_pesquisaModule { }