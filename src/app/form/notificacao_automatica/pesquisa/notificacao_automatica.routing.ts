import { Routes, RouterModule } from '@angular/router';  import { Notificacao_automaticaComponent } from './notificacao_automatica.component';  const notificacao_automatica_routes: Routes = [   { path: 'notificacao_automatica*', pathMatch:'full', redirectTo: '/notificacao_automatica' },   { path: 'notificacao_automatica', component: Notificacao_automaticaComponent} ];  export const notificacao_automatica_routing = RouterModule.forChild(notificacao_automatica_routes);