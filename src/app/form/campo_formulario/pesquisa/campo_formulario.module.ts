import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { Campo_formularioComponent } from './campo_formulario.component'; import { campo_formulario_routing } from './campo_formulario.routing';  @NgModule({   imports:      [ CommonModule, campo_formulario_routing, SharedModule],   declarations: [ Campo_formularioComponent ],   exports:      [ Campo_formularioComponent ] }) export class Campo_formularioModule { }