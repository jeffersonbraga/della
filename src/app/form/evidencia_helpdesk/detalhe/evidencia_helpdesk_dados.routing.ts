import { Routes, RouterModule } from '@angular/router';  import { Evidencia_helpdeskDadosComponent }   from './evidencia_helpdesk_dados.component'; import { Evidencia_helpdeskDadosDetailsComponent } from './evidencia_helpdesk_dadosDetails.component'; import { Evidencia_helpdeskDadosEditComponent } from './evidencia_helpdesk_dadosEdit.component';  const evidencia_helpdesk_dados_routes: Routes = [   {     path: '',     component: Evidencia_helpdeskDadosComponent,     children: [       { path:'details', component: Evidencia_helpdeskDadosDetailsComponent },       { path:'edit', component: Evidencia_helpdeskDadosEditComponent }     ]   } ];  export const evidencia_helpdesk_dados_routing = RouterModule.forChild(evidencia_helpdesk_dados_routes); 