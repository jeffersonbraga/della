import { Routes, RouterModule } from '@angular/router';  import { Avaliacao_reuniaoDadosComponent }   from './avaliacao_reuniao_dados.component'; import { Avaliacao_reuniaoDadosDetailsComponent } from './avaliacao_reuniao_dadosDetails.component'; import { Avaliacao_reuniaoDadosEditComponent } from './avaliacao_reuniao_dadosEdit.component';  const avaliacao_reuniao_dados_routes: Routes = [   {     path: '',     component: Avaliacao_reuniaoDadosComponent,     children: [       { path:'details', component: Avaliacao_reuniaoDadosDetailsComponent },       { path:'edit', component: Avaliacao_reuniaoDadosEditComponent }     ]   } ];  export const avaliacao_reuniao_dados_routing = RouterModule.forChild(avaliacao_reuniao_dados_routes); 