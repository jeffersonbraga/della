import { Routes, RouterModule } from '@angular/router';  import { ReuniaoComponent } from './reuniao.component';  const reuniao_routes: Routes = [   { path: 'reuniao*', pathMatch:'full', redirectTo: '/reuniao' },   { path: 'reuniao', component: ReuniaoComponent} ];  export const reuniao_routing = RouterModule.forChild(reuniao_routes);