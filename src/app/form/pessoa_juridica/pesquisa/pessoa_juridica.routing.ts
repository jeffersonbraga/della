import { Routes, RouterModule } from '@angular/router';  import { Pessoa_juridicaComponent } from './pessoa_juridica.component';  const pessoa_juridica_routes: Routes = [   { path: 'pessoa_juridica*', pathMatch:'full', redirectTo: '/pessoa_juridica' },   { path: 'pessoa_juridica', component: Pessoa_juridicaComponent} ];  export const pessoa_juridica_routing = RouterModule.forChild(pessoa_juridica_routes);