import { Routes, RouterModule } from '@angular/router';  import { Cronograma_auditoriaDadosComponent }   from './cronograma_auditoria_dados.component'; import { Cronograma_auditoriaDadosDetailsComponent } from './cronograma_auditoria_dadosDetails.component'; import { Cronograma_auditoriaDadosEditComponent } from './cronograma_auditoria_dadosEdit.component';  const cronograma_auditoria_dados_routes: Routes = [   {     path: '',     component: Cronograma_auditoriaDadosComponent,     children: [       { path:'details', component: Cronograma_auditoriaDadosDetailsComponent },       { path:'edit', component: Cronograma_auditoriaDadosEditComponent }     ]   } ];  export const cronograma_auditoria_dados_routing = RouterModule.forChild(cronograma_auditoria_dados_routes); 