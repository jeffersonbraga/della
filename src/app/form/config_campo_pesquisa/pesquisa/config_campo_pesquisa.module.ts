import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Config_campo_pesquisaComponent } from './config_campo_pesquisa.component'; import { config_campo_pesquisa_routing } from './config_campo_pesquisa.routing';  @NgModule({   imports:      [ CommonModule, config_campo_pesquisa_routing, SharedModule],   declarations: [ Config_campo_pesquisaComponent ],   exports:      [ Config_campo_pesquisaComponent ] }) export class Config_campo_pesquisaModule { }