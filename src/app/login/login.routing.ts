import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const login_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent}
];

export const login_routing = RouterModule.forChild(login_routes);