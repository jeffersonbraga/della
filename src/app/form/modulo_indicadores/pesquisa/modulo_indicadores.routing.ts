import { Routes, RouterModule } from '@angular/router';  import { Modulo_indicadoresComponent } from './modulo_indicadores.component';  const modulo_indicadores_routes: Routes = [   { path: 'modulo_indicadores*', pathMatch:'full', redirectTo: '/modulo_indicadores' },   { path: 'modulo_indicadores', component: Modulo_indicadoresComponent} ];  export const modulo_indicadores_routing = RouterModule.forChild(modulo_indicadores_routes);