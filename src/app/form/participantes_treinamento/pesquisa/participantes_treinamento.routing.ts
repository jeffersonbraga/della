import { Routes, RouterModule } from '@angular/router';  import { Participantes_treinamentoComponent } from './participantes_treinamento.component';  const participantes_treinamento_routes: Routes = [   { path: 'participantes_treinamento*', pathMatch:'full', redirectTo: '/participantes_treinamento' },   { path: 'participantes_treinamento', component: Participantes_treinamentoComponent} ];  export const participantes_treinamento_routing = RouterModule.forChild(participantes_treinamento_routes);