import { Routes, RouterModule } from '@angular/router';  import { EmpresaComponent } from './empresa.component';  const empresa_routes: Routes = [   { path: 'empresa*', pathMatch:'full', redirectTo: '/empresa' },   { path: 'empresa', component: EmpresaComponent} ];  export const empresa_routing = RouterModule.forChild(empresa_routes);