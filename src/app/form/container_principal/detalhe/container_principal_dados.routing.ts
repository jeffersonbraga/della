import { Routes, RouterModule } from '@angular/router';  import { Container_principalDadosComponent }   from './container_principal_dados.component'; import { Container_principalDadosDetailsComponent } from './container_principal_dadosDetails.component'; import { Container_principalDadosEditComponent } from './container_principal_dadosEdit.component';  const container_principal_dados_routes: Routes = [   {     path: '',     component: Container_principalDadosComponent,     children: [       { path:'details', component: Container_principalDadosDetailsComponent },       { path:'edit', component: Container_principalDadosEditComponent }     ]   } ];  export const container_principal_dados_routing = RouterModule.forChild(container_principal_dados_routes); 