import { Routes, RouterModule } from '@angular/router';  import { Ocorrencia_periodicidadeDadosComponent }   from './ocorrencia_periodicidade_dados.component'; import { Ocorrencia_periodicidadeDadosDetailsComponent } from './ocorrencia_periodicidade_dadosDetails.component'; import { Ocorrencia_periodicidadeDadosEditComponent } from './ocorrencia_periodicidade_dadosEdit.component';  const ocorrencia_periodicidade_dados_routes: Routes = [   {     path: '',     component: Ocorrencia_periodicidadeDadosComponent,     children: [       { path:'details', component: Ocorrencia_periodicidadeDadosDetailsComponent },       { path:'edit', component: Ocorrencia_periodicidadeDadosEditComponent }     ]   } ];  export const ocorrencia_periodicidade_dados_routing = RouterModule.forChild(ocorrencia_periodicidade_dados_routes); 