import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { PeriodicidadeDadosComponent } from './periodicidade_dados.component'; import { PeriodicidadeDadosDetailsComponent } from './periodicidade_dadosDetails.component'; import { PeriodicidadeDadosEditComponent } from './periodicidade_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { periodicidade_dados_routing } from './periodicidade_dados.routing';  @NgModule({   imports:      [ CommonModule, periodicidade_dados_routing, SharedModule ],   declarations: [ PeriodicidadeDadosComponent, PeriodicidadeDadosDetailsComponent,                   PeriodicidadeDadosEditComponent ] }) export default class AppModule { }