import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../../shared/shared.module';
import { Mapa_clusterComponent } from './mapa_cluster.component';
import { mapa_cluster_routing } from './mapa_cluster.routing';

@NgModule({
  imports:      [ CommonModule, mapa_cluster_routing, SharedModule],
  declarations: [ Mapa_clusterComponent ],
  exports:      [ Mapa_clusterComponent ]
})
export class Mapa_clusterModule { }