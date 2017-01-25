import { Routes, RouterModule } from '@angular/router';

import { Mapa_clusterComponent } from './mapa_cluster.component';

const mapa_cluster_routes: Routes = [
  { path: 'mapa_cluster*', pathMatch:'full', redirectTo: '/mapa_cluster' },
  { path: 'mapa_cluster', component: Mapa_clusterComponent}
];

export const mapa_cluster_routing = RouterModule.forChild(mapa_cluster_routes);