import { Routes, RouterModule } from '@angular/router';  import { EmpresaDadosComponent }   from './empresa_dados.component'; import { EmpresaDadosDetailsComponent } from './empresa_dadosDetails.component'; import { EmpresaDadosEditComponent } from './empresa_dadosEdit.component';  const empresa_dados_routes: Routes = [   {     path: '',     component: EmpresaDadosComponent,     children: [       { path:'details', component: EmpresaDadosDetailsComponent },       { path:'edit', component: EmpresaDadosEditComponent }     ]   } ];  export const empresa_dados_routing = RouterModule.forChild(empresa_dados_routes); 