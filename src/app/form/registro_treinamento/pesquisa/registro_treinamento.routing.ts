import { Routes, RouterModule } from '@angular/router';  import { Registro_treinamentoComponent } from './registro_treinamento.component';  const registro_treinamento_routes: Routes = [   { path: 'registro_treinamento*', pathMatch:'full', redirectTo: '/registro_treinamento' },   { path: 'registro_treinamento', component: Registro_treinamentoComponent} ];  export const registro_treinamento_routing = RouterModule.forChild(registro_treinamento_routes);