import { Routes, RouterModule } from '@angular/router';  import { Evidencia_helpdeskComponent } from './evidencia_helpdesk.component';  const evidencia_helpdesk_routes: Routes = [   { path: 'evidencia_helpdesk*', pathMatch:'full', redirectTo: '/evidencia_helpdesk' },   { path: 'evidencia_helpdesk', component: Evidencia_helpdeskComponent} ];  export const evidencia_helpdesk_routing = RouterModule.forChild(evidencia_helpdesk_routes);