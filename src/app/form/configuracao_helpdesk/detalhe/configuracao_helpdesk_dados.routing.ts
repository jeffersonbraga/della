import { Routes, RouterModule } from '@angular/router';  import { Configuracao_helpdeskDadosComponent }   from './configuracao_helpdesk_dados.component'; import { Configuracao_helpdeskDadosDetailsComponent } from './configuracao_helpdesk_dadosDetails.component'; import { Configuracao_helpdeskDadosEditComponent } from './configuracao_helpdesk_dadosEdit.component';  const configuracao_helpdesk_dados_routes: Routes = [   {     path: '',     component: Configuracao_helpdeskDadosComponent,     children: [       { path:'details', component: Configuracao_helpdeskDadosDetailsComponent },       { path:'edit', component: Configuracao_helpdeskDadosEditComponent }     ]   } ];  export const configuracao_helpdesk_dados_routing = RouterModule.forChild(configuracao_helpdesk_dados_routes); 