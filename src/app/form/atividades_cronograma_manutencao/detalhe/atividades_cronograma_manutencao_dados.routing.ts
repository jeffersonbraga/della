import { Routes, RouterModule } from '@angular/router';  import { Atividades_cronograma_manutencaoDadosComponent }   from './atividades_cronograma_manutencao_dados.component'; import { Atividades_cronograma_manutencaoDadosDetailsComponent } from './atividades_cronograma_manutencao_dadosDetails.component'; import { Atividades_cronograma_manutencaoDadosEditComponent } from './atividades_cronograma_manutencao_dadosEdit.component';  const atividades_cronograma_manutencao_dados_routes: Routes = [   {     path: '',     component: Atividades_cronograma_manutencaoDadosComponent,     children: [       { path:'details', component: Atividades_cronograma_manutencaoDadosDetailsComponent },       { path:'edit', component: Atividades_cronograma_manutencaoDadosEditComponent }     ]   } ];  export const atividades_cronograma_manutencao_dados_routing = RouterModule.forChild(atividades_cronograma_manutencao_dados_routes); 