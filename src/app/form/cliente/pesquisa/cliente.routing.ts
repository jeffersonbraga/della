import { Routes, RouterModule } from '@angular/router';  import { ClienteComponent } from './cliente.component';  const cliente_routes: Routes = [   { path: 'cliente*', pathMatch:'full', redirectTo: '/cliente' },   { path: 'cliente', component: ClienteComponent} ];  export const cliente_routing = RouterModule.forChild(cliente_routes);