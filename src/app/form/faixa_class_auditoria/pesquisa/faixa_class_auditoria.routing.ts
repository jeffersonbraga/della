import { Routes, RouterModule } from '@angular/router';  import { Faixa_class_auditoriaComponent } from './faixa_class_auditoria.component';  const faixa_class_auditoria_routes: Routes = [   { path: 'faixa_class_auditoria*', pathMatch:'full', redirectTo: '/faixa_class_auditoria' },   { path: 'faixa_class_auditoria', component: Faixa_class_auditoriaComponent} ];  export const faixa_class_auditoria_routing = RouterModule.forChild(faixa_class_auditoria_routes);