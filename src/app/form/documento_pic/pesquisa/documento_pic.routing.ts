import { Routes, RouterModule } from '@angular/router';  import { Documento_picComponent } from './documento_pic.component';  const documento_pic_routes: Routes = [   { path: 'documento_pic*', pathMatch:'full', redirectTo: '/documento_pic' },   { path: 'documento_pic', component: Documento_picComponent} ];  export const documento_pic_routing = RouterModule.forChild(documento_pic_routes);