import { Routes, RouterModule } from '@angular/router';  import { PicComponent } from './pic.component';  const pic_routes: Routes = [   { path: 'pic*', pathMatch:'full', redirectTo: '/pic' },   { path: 'pic', component: PicComponent} ];  export const pic_routing = RouterModule.forChild(pic_routes);