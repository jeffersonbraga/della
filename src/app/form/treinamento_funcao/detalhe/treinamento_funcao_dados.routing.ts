import { Routes, RouterModule } from '@angular/router';  import { Treinamento_funcaoDadosComponent }   from './treinamento_funcao_dados.component'; import { Treinamento_funcaoDadosDetailsComponent } from './treinamento_funcao_dadosDetails.component'; import { Treinamento_funcaoDadosEditComponent } from './treinamento_funcao_dadosEdit.component';  const treinamento_funcao_dados_routes: Routes = [   {     path: '',     component: Treinamento_funcaoDadosComponent,     children: [       { path:'details', component: Treinamento_funcaoDadosDetailsComponent },       { path:'edit', component: Treinamento_funcaoDadosEditComponent }     ]   } ];  export const treinamento_funcao_dados_routing = RouterModule.forChild(treinamento_funcao_dados_routes); 