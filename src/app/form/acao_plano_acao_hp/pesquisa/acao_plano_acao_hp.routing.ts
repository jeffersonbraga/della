import { Routes, RouterModule } from '@angular/router';  import { Acao_plano_acao_hpComponent } from './acao_plano_acao_hp.component';  const acao_plano_acao_hp_routes: Routes = [   { path: 'acao_plano_acao_hp*', pathMatch:'full', redirectTo: '/acao_plano_acao_hp' },   { path: 'acao_plano_acao_hp', component: Acao_plano_acao_hpComponent} ];  export const acao_plano_acao_hp_routing = RouterModule.forChild(acao_plano_acao_hp_routes);