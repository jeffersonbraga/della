import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { SharedModule }   from '../../../shared/shared.module'; import { PeriodicidadeComponent } from './periodicidade.component'; import { periodicidade_routing } from './periodicidade.routing';  @NgModule({   imports:      [ CommonModule, periodicidade_routing, SharedModule],   declarations: [ PeriodicidadeComponent ],   exports:      [ PeriodicidadeComponent ] }) export class PeriodicidadeModule { }