import { Routes, RouterModule } from '@angular/router';  import { Plano_acaoComponent } from './plano_acao.component';  const plano_acao_routes: Routes = [   { path: 'plano_acao*', pathMatch:'full', redirectTo: '/plano_acao' },   { path: 'plano_acao', component: Plano_acaoComponent} ];  export const plano_acao_routing = RouterModule.forChild(plano_acao_routes);