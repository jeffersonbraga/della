import { Routes, RouterModule } from '@angular/router';  import { AuditoriaComponent } from './auditoria.component';  const auditoria_routes: Routes = [   { path: 'auditoria*', pathMatch:'full', redirectTo: '/auditoria' },   { path: 'auditoria', component: AuditoriaComponent} ];  export const auditoria_routing = RouterModule.forChild(auditoria_routes);