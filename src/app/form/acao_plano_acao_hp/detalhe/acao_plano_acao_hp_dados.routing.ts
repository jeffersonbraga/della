import { Routes, RouterModule } from '@angular/router';  import { Acao_plano_acao_hpDadosComponent }   from './acao_plano_acao_hp_dados.component'; import { Acao_plano_acao_hpDadosDetailsComponent } from './acao_plano_acao_hp_dadosDetails.component'; import { Acao_plano_acao_hpDadosEditComponent } from './acao_plano_acao_hp_dadosEdit.component';  const acao_plano_acao_hp_dados_routes: Routes = [   {     path: '',     component: Acao_plano_acao_hpDadosComponent,     children: [       { path:'details', component: Acao_plano_acao_hpDadosDetailsComponent },       { path:'edit', component: Acao_plano_acao_hpDadosEditComponent }     ]   } ];  export const acao_plano_acao_hp_dados_routing = RouterModule.forChild(acao_plano_acao_hp_dados_routes); 