import { Routes, RouterModule } from '@angular/router';  import { UnidadeDadosComponent }   from './unidade_dados.component'; import { UnidadeDadosDetailsComponent } from './unidade_dadosDetails.component'; import { UnidadeDadosEditComponent } from './unidade_dadosEdit.component';  const unidade_dados_routes: Routes = [   {     path: '',     component: UnidadeDadosComponent,     children: [       { path:'details', component: UnidadeDadosDetailsComponent },       { path:'edit', component: UnidadeDadosEditComponent }     ]   } ];  export const unidade_dados_routing = RouterModule.forChild(unidade_dados_routes); 