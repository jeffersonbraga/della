import { Routes, RouterModule } from '@angular/router';  import { Permissao_padraoDadosComponent }   from './permissao_padrao_dados.component'; import { Permissao_padraoDadosDetailsComponent } from './permissao_padrao_dadosDetails.component'; import { Permissao_padraoDadosEditComponent } from './permissao_padrao_dadosEdit.component';  const permissao_padrao_dados_routes: Routes = [   {     path: '',     component: Permissao_padraoDadosComponent,     children: [       { path:'details', component: Permissao_padraoDadosDetailsComponent },       { path:'edit', component: Permissao_padraoDadosEditComponent }     ]   } ];  export const permissao_padrao_dados_routing = RouterModule.forChild(permissao_padrao_dados_routes); 