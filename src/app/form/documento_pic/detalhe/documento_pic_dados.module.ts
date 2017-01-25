import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Documento_picDadosComponent } from './documento_pic_dados.component'; import { Documento_picDadosDetailsComponent } from './documento_pic_dadosDetails.component'; import { Documento_picDadosEditComponent } from './documento_pic_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { documento_pic_dados_routing } from './documento_pic_dados.routing';  @NgModule({   imports:      [ CommonModule, documento_pic_dados_routing, SharedModule ],   declarations: [ Documento_picDadosComponent, Documento_picDadosDetailsComponent,                   Documento_picDadosEditComponent ] }) export default class AppModule { }