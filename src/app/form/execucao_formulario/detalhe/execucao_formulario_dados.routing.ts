import { Routes, RouterModule } from '@angular/router';  import { Execucao_formularioDadosComponent }   from './execucao_formulario_dados.component'; import { Execucao_formularioDadosDetailsComponent } from './execucao_formulario_dadosDetails.component'; import { Execucao_formularioDadosEditComponent } from './execucao_formulario_dadosEdit.component';  const execucao_formulario_dados_routes: Routes = [   {     path: '',     component: Execucao_formularioDadosComponent,     children: [       { path:'details', component: Execucao_formularioDadosDetailsComponent },       { path:'edit', component: Execucao_formularioDadosEditComponent }     ]   } ];  export const execucao_formulario_dados_routing = RouterModule.forChild(execucao_formulario_dados_routes); 