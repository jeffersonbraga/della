import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { ModuloDadosComponent } from './modulo_dados.component'; import { ModuloDadosDetailsComponent } from './modulo_dadosDetails.component'; import { ModuloDadosEditComponent } from './modulo_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { modulo_dados_routing } from './modulo_dados.routing';  @NgModule({   imports:      [ CommonModule, modulo_dados_routing, SharedModule ],   declarations: [ ModuloDadosComponent, ModuloDadosDetailsComponent,                   ModuloDadosEditComponent ] }) export default class AppModule { }