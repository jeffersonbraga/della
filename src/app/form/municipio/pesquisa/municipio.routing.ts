import { Routes, RouterModule } from '@angular/router';  import { MunicipioComponent } from './municipio.component';  const municipio_routes: Routes = [   { path: 'municipio*', pathMatch:'full', redirectTo: '/municipio' },   { path: 'municipio', component: MunicipioComponent} ];  export const municipio_routing = RouterModule.forChild(municipio_routes);