import { NgModule }      from '@angular/core'; import { CommonModule } from '@angular/common';  import { Acao_preventiva_paDadosComponent } from './acao_preventiva_pa_dados.component'; import { Acao_preventiva_paDadosDetailsComponent } from './acao_preventiva_pa_dadosDetails.component'; import { Acao_preventiva_paDadosEditComponent } from './acao_preventiva_pa_dadosEdit.component'; import { SharedModule }   from '../../../shared/shared.module'; import { acao_preventiva_pa_dados_routing } from './acao_preventiva_pa_dados.routing';  @NgModule({   imports:      [ CommonModule, acao_preventiva_pa_dados_routing, SharedModule ],   declarations: [ Acao_preventiva_paDadosComponent, Acao_preventiva_paDadosDetailsComponent,                   Acao_preventiva_paDadosEditComponent ] }) export default class AppModule { }