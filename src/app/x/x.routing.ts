import { Routes, RouterModule } from '@angular/router';

import { XComponent } from './x.component';

const x_routes: Routes = [
  { path: 'x*', pathMatch:'full', redirectTo: '/x' },
  { path: 'x', component: XComponent}
];

export const x_routing = RouterModule.forChild(x_routes);