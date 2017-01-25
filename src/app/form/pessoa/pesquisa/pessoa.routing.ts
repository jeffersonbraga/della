import { Routes, RouterModule } from '@angular/router';  import { PessoaComponent } from './pessoa.component';  const pessoa_routes: Routes = [   
    { path: 'pessoa*', pathMatch:'full', redirectTo: '/pessoa' },   
    { path: 'pessoa', component: PessoaComponent} ];  export const pessoa_routing = RouterModule.forChild(pessoa_routes);