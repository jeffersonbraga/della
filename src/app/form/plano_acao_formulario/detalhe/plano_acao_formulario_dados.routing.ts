import { Routes, RouterModule } from '@angular/router';  import { Plano_acao_formularioDadosComponent }   from './plano_acao_formulario_dados.component'; import { Plano_acao_formularioDadosDetailsComponent } from './plano_acao_formulario_dadosDetails.component'; import { Plano_acao_formularioDadosEditComponent } from './plano_acao_formulario_dadosEdit.component';  const plano_acao_formulario_dados_routes: Routes = [   {     path: '',     component: Plano_acao_formularioDadosComponent,     children: [       { path:'details', component: Plano_acao_formularioDadosDetailsComponent },       { path:'edit', component: Plano_acao_formularioDadosEditComponent }     ]   } ];  export const plano_acao_formulario_dados_routing = RouterModule.forChild(plano_acao_formulario_dados_routes); 