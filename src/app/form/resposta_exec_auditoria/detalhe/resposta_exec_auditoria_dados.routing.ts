import { Routes, RouterModule } from '@angular/router';  import { Resposta_exec_auditoriaDadosComponent }   from './resposta_exec_auditoria_dados.component'; import { Resposta_exec_auditoriaDadosDetailsComponent } from './resposta_exec_auditoria_dadosDetails.component'; import { Resposta_exec_auditoriaDadosEditComponent } from './resposta_exec_auditoria_dadosEdit.component';  const resposta_exec_auditoria_dados_routes: Routes = [   {     path: '',     component: Resposta_exec_auditoriaDadosComponent,     children: [       { path:'details', component: Resposta_exec_auditoriaDadosDetailsComponent },       { path:'edit', component: Resposta_exec_auditoriaDadosEditComponent }     ]   } ];  export const resposta_exec_auditoria_dados_routing = RouterModule.forChild(resposta_exec_auditoria_dados_routes); 