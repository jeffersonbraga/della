import { Routes, RouterModule } from '@angular/router';  import { Campo_formularioDadosComponent }   from './campo_formulario_dados.component'; import { Campo_formularioDadosDetailsComponent } from './campo_formulario_dadosDetails.component'; import { Campo_formularioDadosEditComponent } from './campo_formulario_dadosEdit.component';  const campo_formulario_dados_routes: Routes = [   {     path: '',     component: Campo_formularioDadosComponent,     children: [       { path:'details', component: Campo_formularioDadosDetailsComponent },       { path:'edit', component: Campo_formularioDadosEditComponent }     ]   } ];  export const campo_formulario_dados_routing = RouterModule.forChild(campo_formulario_dados_routes); 