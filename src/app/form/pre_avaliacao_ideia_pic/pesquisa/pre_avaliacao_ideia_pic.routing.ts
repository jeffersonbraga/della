import { Routes, RouterModule } from '@angular/router';  import { Pre_avaliacao_ideia_picComponent } from './pre_avaliacao_ideia_pic.component';  const pre_avaliacao_ideia_pic_routes: Routes = [   { path: 'pre_avaliacao_ideia_pic*', pathMatch:'full', redirectTo: '/pre_avaliacao_ideia_pic' },   { path: 'pre_avaliacao_ideia_pic', component: Pre_avaliacao_ideia_picComponent} ];  export const pre_avaliacao_ideia_pic_routing = RouterModule.forChild(pre_avaliacao_ideia_pic_routes);