import { Routes, RouterModule } from '@angular/router';  import { VeiculoComponent } from './veiculo.component';  const veiculo_routes: Routes = [   { path: 'veiculo*', pathMatch:'full', redirectTo: '/veiculo' },   { path: 'veiculo', component: VeiculoComponent} ];  export const veiculo_routing = RouterModule.forChild(veiculo_routes);