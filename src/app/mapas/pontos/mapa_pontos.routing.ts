import { Routes, RouterModule } from '@angular/router';

import { Mapa_pontosComponent } from './mapa_pontos.component';

const mapa_pontos_routes: Routes = [
  { path: 'mapa_pontos*', pathMatch:'full', redirectTo: '/mapa_pontos' },
  { path: 'mapa_pontos', component: Mapa_pontosComponent}
];

export const mapa_pontos_routing = RouterModule.forChild(mapa_pontos_routes);