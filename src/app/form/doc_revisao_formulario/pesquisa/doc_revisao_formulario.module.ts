import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Doc_revisao_formularioComponent } from './doc_revisao_formulario.component'; import { doc_revisao_formulario_routing } from './doc_revisao_formulario.routing';  @NgModule({   imports:      [ CommonModule, doc_revisao_formulario_routing, SharedModule],   declarations: [ Doc_revisao_formularioComponent ],   exports:      [ Doc_revisao_formularioComponent ] }) export class Doc_revisao_formularioModule { }