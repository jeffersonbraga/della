import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Evento_campanhaDadosComponent } from './evento_campanha_dados.component'; import { Evento_campanhaDadosDetailsComponent } from './evento_campanha_dadosDetails.component'; import { Evento_campanhaDadosEditComponent } from './evento_campanha_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { evento_campanha_dados_routing } from './evento_campanha_dados.routing';  @NgModule({   imports:      [ CommonModule, evento_campanha_dados_routing, SharedModule ],   declarations: [ Evento_campanhaDadosComponent, Evento_campanhaDadosDetailsComponent,                   Evento_campanhaDadosEditComponent ] }) export default class AppModule { }