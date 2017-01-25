import { Routes, RouterModule } from '@angular/router';  
import { ServicoComponent } from './servico.component';

const servico_routes: Routes = [   
    { path: 'servico*', pathMatch:'full', redirectTo: '/servico' },   
    { path: 'servico', component: ServicoComponent} ];  

export const servico_routing = RouterModule.forChild(servico_routes);