import { Routes, RouterModule } from '@angular/router';  import { Registro_treinamentoDadosComponent }   from './registro_treinamento_dados.component'; import { Registro_treinamentoDadosDetailsComponent } from './registro_treinamento_dadosDetails.component'; import { Registro_treinamentoDadosEditComponent } from './registro_treinamento_dadosEdit.component';  const registro_treinamento_dados_routes: Routes = [   {     path: '',     component: Registro_treinamentoDadosComponent,     children: [       { path:'details', component: Registro_treinamentoDadosDetailsComponent },       { path:'edit', component: Registro_treinamentoDadosEditComponent }     ]   } ];  export const registro_treinamento_dados_routing = RouterModule.forChild(registro_treinamento_dados_routes); 