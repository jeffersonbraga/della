import { Routes, RouterModule } from '@angular/router';  import { Diagrama_helpdeskComponent } from './diagrama_helpdesk.component';  const diagrama_helpdesk_routes: Routes = [   { path: 'diagrama_helpdesk*', pathMatch:'full', redirectTo: '/diagrama_helpdesk' },   { path: 'diagrama_helpdesk', component: Diagrama_helpdeskComponent} ];  export const diagrama_helpdesk_routing = RouterModule.forChild(diagrama_helpdesk_routes);