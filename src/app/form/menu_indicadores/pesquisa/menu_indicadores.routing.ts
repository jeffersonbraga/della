import { Routes, RouterModule } from '@angular/router';  import { Menu_indicadoresComponent } from './menu_indicadores.component';  const menu_indicadores_routes: Routes = [   { path: 'menu_indicadores*', pathMatch:'full', redirectTo: '/menu_indicadores' },   { path: 'menu_indicadores', component: Menu_indicadoresComponent} ];  export const menu_indicadores_routing = RouterModule.forChild(menu_indicadores_routes);