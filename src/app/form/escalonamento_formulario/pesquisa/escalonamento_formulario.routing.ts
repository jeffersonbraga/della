import { Routes, RouterModule } from '@angular/router';  import { Escalonamento_formularioComponent } from './escalonamento_formulario.component';  const escalonamento_formulario_routes: Routes = [   { path: 'escalonamento_formulario*', pathMatch:'full', redirectTo: '/escalonamento_formulario' },   { path: 'escalonamento_formulario', component: Escalonamento_formularioComponent} ];  export const escalonamento_formulario_routing = RouterModule.forChild(escalonamento_formulario_routes);