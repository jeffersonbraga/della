import { Routes, RouterModule } from '@angular/router';  import { Acao_preventiva_formularioComponent } from './acao_preventiva_formulario.component';  const acao_preventiva_formulario_routes: Routes = [   { path: 'acao_preventiva_formulario*', pathMatch:'full', redirectTo: '/acao_preventiva_formulario' },   { path: 'acao_preventiva_formulario', component: Acao_preventiva_formularioComponent} ];  export const acao_preventiva_formulario_routing = RouterModule.forChild(acao_preventiva_formulario_routes);