import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { MunicipioComponent } from './municipio.component'; import { municipio_routing } from './municipio.routing';  @NgModule({   imports:      [ CommonModule, municipio_routing, SharedModule],   declarations: [ MunicipioComponent ],   exports:      [ MunicipioComponent ] }) export class MunicipioModule { }