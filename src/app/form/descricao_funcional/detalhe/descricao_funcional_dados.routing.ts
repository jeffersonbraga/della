import { Routes, RouterModule } from '@angular/router';  import { Descricao_funcionalDadosComponent }   from './descricao_funcional_dados.component'; import { Descricao_funcionalDadosDetailsComponent } from './descricao_funcional_dadosDetails.component'; import { Descricao_funcionalDadosEditComponent } from './descricao_funcional_dadosEdit.component';  const descricao_funcional_dados_routes: Routes = [   {     path: '',     component: Descricao_funcionalDadosComponent,     children: [       { path:'details', component: Descricao_funcionalDadosDetailsComponent },       { path:'edit', component: Descricao_funcionalDadosEditComponent }     ]   } ];  export const descricao_funcional_dados_routing = RouterModule.forChild(descricao_funcional_dados_routes); 