import { Routes, RouterModule } from '@angular/router';  import { Resposta_exec_formularioDadosComponent }   from './resposta_exec_formulario_dados.component'; import { Resposta_exec_formularioDadosDetailsComponent } from './resposta_exec_formulario_dadosDetails.component'; import { Resposta_exec_formularioDadosEditComponent } from './resposta_exec_formulario_dadosEdit.component';  const resposta_exec_formulario_dados_routes: Routes = [   {     path: '',     component: Resposta_exec_formularioDadosComponent,     children: [       { path:'details', component: Resposta_exec_formularioDadosDetailsComponent },       { path:'edit', component: Resposta_exec_formularioDadosEditComponent }     ]   } ];  export const resposta_exec_formulario_dados_routing = RouterModule.forChild(resposta_exec_formulario_dados_routes); 