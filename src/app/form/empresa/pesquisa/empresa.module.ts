import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { EmpresaComponent } from './empresa.component'; import { empresa_routing } from './empresa.routing';  @NgModule({   imports:      [ CommonModule, empresa_routing, SharedModule],   declarations: [ EmpresaComponent ],   exports:      [ EmpresaComponent ] }) export class EmpresaModule { }