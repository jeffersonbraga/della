import { Routes, RouterModule } from '@angular/router';  import { VeiculoDadosComponent }   from './veiculo_dados.component'; import { VeiculoDadosDetailsComponent } from './veiculo_dadosDetails.component'; import { VeiculoDadosEditComponent } from './veiculo_dadosEdit.component';  const veiculo_dados_routes: Routes = [   {     path: '',     component: VeiculoDadosComponent,     children: [       { path:'details', component: VeiculoDadosDetailsComponent },       { path:'edit', component: VeiculoDadosEditComponent }     ]   } ];  export const veiculo_dados_routing = RouterModule.forChild(veiculo_dados_routes); 