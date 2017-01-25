import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const home_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent}
];

export const home_routing = RouterModule.forChild(home_routes);