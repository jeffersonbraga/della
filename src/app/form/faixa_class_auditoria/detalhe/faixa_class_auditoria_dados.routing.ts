import { Routes, RouterModule } from '@angular/router';  import { Faixa_class_auditoriaDadosComponent }   from './faixa_class_auditoria_dados.component'; import { Faixa_class_auditoriaDadosDetailsComponent } from './faixa_class_auditoria_dadosDetails.component'; import { Faixa_class_auditoriaDadosEditComponent } from './faixa_class_auditoria_dadosEdit.component';  const faixa_class_auditoria_dados_routes: Routes = [   {     path: '',     component: Faixa_class_auditoriaDadosComponent,     children: [       { path:'details', component: Faixa_class_auditoriaDadosDetailsComponent },       { path:'edit', component: Faixa_class_auditoriaDadosEditComponent }     ]   } ];  export const faixa_class_auditoria_dados_routing = RouterModule.forChild(faixa_class_auditoria_dados_routes); 