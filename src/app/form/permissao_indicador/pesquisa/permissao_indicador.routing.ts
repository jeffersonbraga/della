import { Routes, RouterModule } from '@angular/router';  import { Permissao_indicadorComponent } from './permissao_indicador.component';  const permissao_indicador_routes: Routes = [   { path: 'permissao_indicador*', pathMatch:'full', redirectTo: '/permissao_indicador' },   { path: 'permissao_indicador', component: Permissao_indicadorComponent} ];  export const permissao_indicador_routing = RouterModule.forChild(permissao_indicador_routes);