import { Routes, RouterModule } from '@angular/router';  import { CondicaoComponent } from './condicao.component';  const condicao_routes: Routes = [   { path: 'condicao*', pathMatch:'full', redirectTo: '/condicao' },   { path: 'condicao', component: CondicaoComponent} ];  export const condicao_routing = RouterModule.forChild(condicao_routes);