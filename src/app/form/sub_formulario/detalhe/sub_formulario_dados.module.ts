import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Sub_formularioDadosComponent } from './sub_formulario_dados.component'; import { Sub_formularioDadosDetailsComponent } from './sub_formulario_dadosDetails.component'; import { Sub_formularioDadosEditComponent } from './sub_formulario_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { sub_formulario_dados_routing } from './sub_formulario_dados.routing';  @NgModule({   imports:      [ CommonModule, sub_formulario_dados_routing, SharedModule ],   declarations: [ Sub_formularioDadosComponent, Sub_formularioDadosDetailsComponent,                   Sub_formularioDadosEditComponent ] }) export default class AppModule { }