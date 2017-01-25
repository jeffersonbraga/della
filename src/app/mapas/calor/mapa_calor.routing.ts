import { Routes, RouterModule } from '@angular/router';

import { Mapa_calorComponent } from './mapa_calor.component';

const mapa_calor_routes: Routes = [
  { path: 'mapa_calor*', pathMatch:'full', redirectTo: '/mapa_calor' },
  { path: 'mapa_calor', component: Mapa_calorComponent}
];

export const mapa_calor_routing = RouterModule.forChild(mapa_calor_routes);