import { Routes, RouterModule } from '@angular/router';  import { Ocorrencia_periodicidadeComponent } from './ocorrencia_periodicidade.component';  const ocorrencia_periodicidade_routes: Routes = [   { path: 'ocorrencia_periodicidade*', pathMatch:'full', redirectTo: '/ocorrencia_periodicidade' },   { path: 'ocorrencia_periodicidade', component: Ocorrencia_periodicidadeComponent} ];  export const ocorrencia_periodicidade_routing = RouterModule.forChild(ocorrencia_periodicidade_routes);