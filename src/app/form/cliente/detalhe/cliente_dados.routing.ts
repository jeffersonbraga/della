import { Routes, RouterModule } from '@angular/router';  import { ClienteDadosComponent }   from './cliente_dados.component'; import { ClienteDadosDetailsComponent } from './cliente_dadosDetails.component'; import { ClienteDadosEditComponent } from './cliente_dadosEdit.component';  const cliente_dados_routes: Routes = [   {     path: '',     component: ClienteDadosComponent,     children: [       { path:'details', component: ClienteDadosDetailsComponent },       { path:'edit', component: ClienteDadosEditComponent }     ]   } ];  export const cliente_dados_routing = RouterModule.forChild(cliente_dados_routes); 