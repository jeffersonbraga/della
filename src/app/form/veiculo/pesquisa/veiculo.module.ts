import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { VeiculoComponent } from './veiculo.component'; import { veiculo_routing } from './veiculo.routing';  @NgModule({   imports:      [ CommonModule, veiculo_routing, SharedModule],   declarations: [ VeiculoComponent ],   exports:      [ VeiculoComponent ] }) export class VeiculoModule { }