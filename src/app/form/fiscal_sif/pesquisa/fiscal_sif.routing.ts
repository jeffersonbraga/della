import { Routes, RouterModule } from '@angular/router';  import { Fiscal_sifComponent } from './fiscal_sif.component';  const fiscal_sif_routes: Routes = [   { path: 'fiscal_sif*', pathMatch:'full', redirectTo: '/fiscal_sif' },   { path: 'fiscal_sif', component: Fiscal_sifComponent} ];  export const fiscal_sif_routing = RouterModule.forChild(fiscal_sif_routes);