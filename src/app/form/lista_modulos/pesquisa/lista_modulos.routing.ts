import { Routes, RouterModule } from '@angular/router';  import { Lista_modulosComponent } from './lista_modulos.component';  const lista_modulos_routes: Routes = [   { path: 'lista_modulos*', pathMatch:'full', redirectTo: '/lista_modulos' },   { path: 'lista_modulos', component: Lista_modulosComponent} ];  export const lista_modulos_routing = RouterModule.forChild(lista_modulos_routes);