import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { VeiculoDadosComponent } from './veiculo_dados.component'; import { VeiculoDadosDetailsComponent } from './veiculo_dadosDetails.component'; import { VeiculoDadosEditComponent } from './veiculo_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { veiculo_dados_routing } from './veiculo_dados.routing';  @NgModule({   imports:      [ CommonModule, veiculo_dados_routing, SharedModule ],   declarations: [ VeiculoDadosComponent, VeiculoDadosDetailsComponent,                   VeiculoDadosEditComponent ] }) export default class AppModule { }