import { Routes, RouterModule } from '@angular/router';  import { Campo_agrupadorComponent } from './campo_agrupador.component';  const campo_agrupador_routes: Routes = [   { path: 'campo_agrupador*', pathMatch:'full', redirectTo: '/campo_agrupador' },   { path: 'campo_agrupador', component: Campo_agrupadorComponent} ];  export const campo_agrupador_routing = RouterModule.forChild(campo_agrupador_routes);