import { Routes, RouterModule } from '@angular/router';  import { Atividade_acao_pl_hpDadosComponent }   from './atividade_acao_pl_hp_dados.component'; import { Atividade_acao_pl_hpDadosDetailsComponent } from './atividade_acao_pl_hp_dadosDetails.component'; import { Atividade_acao_pl_hpDadosEditComponent } from './atividade_acao_pl_hp_dadosEdit.component';  const atividade_acao_pl_hp_dados_routes: Routes = [   {     path: '',     component: Atividade_acao_pl_hpDadosComponent,     children: [       { path:'details', component: Atividade_acao_pl_hpDadosDetailsComponent },       { path:'edit', component: Atividade_acao_pl_hpDadosEditComponent }     ]   } ];  export const atividade_acao_pl_hp_dados_routing = RouterModule.forChild(atividade_acao_pl_hp_dados_routes); 