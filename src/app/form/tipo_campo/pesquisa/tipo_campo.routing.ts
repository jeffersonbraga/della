import { Routes, RouterModule } from '@angular/router';  import { Tipo_campoComponent } from './tipo_campo.component';  const tipo_campo_routes: Routes = [   { path: 'tipo_campo*', pathMatch:'full', redirectTo: '/tipo_campo' },   { path: 'tipo_campo', component: Tipo_campoComponent} ];  export const tipo_campo_routing = RouterModule.forChild(tipo_campo_routes);