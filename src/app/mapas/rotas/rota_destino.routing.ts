import { Routes, RouterModule } from '@angular/router';

import { Rota_destinoComponent } from './rota_destino.component';

const rota_destino_routes: Routes = [
  { path: 'rota_destino*', pathMatch:'full', redirectTo: '/rota_destino' },
  { path: 'rota_destino', component: Rota_destinoComponent}
];

export const rota_destino_routing = RouterModule.forChild(rota_destino_routes);