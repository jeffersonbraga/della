import { Routes, RouterModule } from '@angular/router';  import { Plano_acao_auditoriaComponent } from './plano_acao_auditoria.component';  const plano_acao_auditoria_routes: Routes = [   { path: 'plano_acao_auditoria*', pathMatch:'full', redirectTo: '/plano_acao_auditoria' },   { path: 'plano_acao_auditoria', component: Plano_acao_auditoriaComponent} ];  export const plano_acao_auditoria_routing = RouterModule.forChild(plano_acao_auditoria_routes);