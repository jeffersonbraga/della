import { Routes, RouterModule } from '@angular/router';  import { Participantes_treinamentoDadosComponent }   from './participantes_treinamento_dados.component'; import { Participantes_treinamentoDadosDetailsComponent } from './participantes_treinamento_dadosDetails.component'; import { Participantes_treinamentoDadosEditComponent } from './participantes_treinamento_dadosEdit.component';  const participantes_treinamento_dados_routes: Routes = [   {     path: '',     component: Participantes_treinamentoDadosComponent,     children: [       { path:'details', component: Participantes_treinamentoDadosDetailsComponent },       { path:'edit', component: Participantes_treinamentoDadosEditComponent }     ]   } ];  export const participantes_treinamento_dados_routing = RouterModule.forChild(participantes_treinamento_dados_routes); 