import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { MunicipioDadosComponent } from './municipio_dados.component'; import { MunicipioDadosDetailsComponent } from './municipio_dadosDetails.component'; import { MunicipioDadosEditComponent } from './municipio_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { municipio_dados_routing } from './municipio_dados.routing';  @NgModule({   imports:      [ CommonModule, municipio_dados_routing, SharedModule ],   declarations: [ MunicipioDadosComponent, MunicipioDadosDetailsComponent,                   MunicipioDadosEditComponent ] }) export default class AppModule { }