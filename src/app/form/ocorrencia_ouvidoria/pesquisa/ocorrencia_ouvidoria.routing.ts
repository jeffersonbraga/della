import { Routes, RouterModule } from '@angular/router';  import { Ocorrencia_ouvidoriaComponent } from './ocorrencia_ouvidoria.component';  const ocorrencia_ouvidoria_routes: Routes = [   { path: 'ocorrencia_ouvidoria*', pathMatch:'full', redirectTo: '/ocorrencia_ouvidoria' },   { path: 'ocorrencia_ouvidoria', component: Ocorrencia_ouvidoriaComponent} ];  export const ocorrencia_ouvidoria_routing = RouterModule.forChild(ocorrencia_ouvidoria_routes);