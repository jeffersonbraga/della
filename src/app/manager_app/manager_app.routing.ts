import { Routes, RouterModule } from '@angular/router';

import { Manager_appComponent } from './manager_app.component';

const manager_app_routes: Routes = [
  { path: 'manager*', pathMatch:'full', redirectTo: '/manager' },
  { path: 'manager', component: Manager_appComponent}
];

export const manager_app_routing = RouterModule.forChild(manager_app_routes);