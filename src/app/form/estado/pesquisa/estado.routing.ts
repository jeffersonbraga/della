import { Routes, RouterModule } from '@angular/router';  import { EstadoComponent } from './estado.component';  const estado_routes: Routes = [   { path: 'estado*', pathMatch:'full', redirectTo: '/estado' },   { path: 'estado', component: EstadoComponent} ];  export const estado_routing = RouterModule.forChild(estado_routes);