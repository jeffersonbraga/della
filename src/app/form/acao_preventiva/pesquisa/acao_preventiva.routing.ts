import { Routes, RouterModule } from '@angular/router';  import { Acao_preventivaComponent } from './acao_preventiva.component';  const acao_preventiva_routes: Routes = [   { path: 'acao_preventiva*', pathMatch:'full', redirectTo: '/acao_preventiva' },   { path: 'acao_preventiva', component: Acao_preventivaComponent} ];  export const acao_preventiva_routing = RouterModule.forChild(acao_preventiva_routes);