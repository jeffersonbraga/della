import { Routes, RouterModule } from '@angular/router';  import { Cronograma_auditoriaComponent } from './cronograma_auditoria.component';  const cronograma_auditoria_routes: Routes = [   { path: 'cronograma_auditoria*', pathMatch:'full', redirectTo: '/cronograma_auditoria' },   { path: 'cronograma_auditoria', component: Cronograma_auditoriaComponent} ];  export const cronograma_auditoria_routing = RouterModule.forChild(cronograma_auditoria_routes);