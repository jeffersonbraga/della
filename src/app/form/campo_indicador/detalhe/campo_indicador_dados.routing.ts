import { Routes, RouterModule } from '@angular/router';  import { Campo_indicadorDadosComponent }   from './campo_indicador_dados.component'; import { Campo_indicadorDadosDetailsComponent } from './campo_indicador_dadosDetails.component'; import { Campo_indicadorDadosEditComponent } from './campo_indicador_dadosEdit.component';  const campo_indicador_dados_routes: Routes = [   {     path: '',     component: Campo_indicadorDadosComponent,     children: [       { path:'details', component: Campo_indicadorDadosDetailsComponent },       { path:'edit', component: Campo_indicadorDadosEditComponent }     ]   } ];  export const campo_indicador_dados_routing = RouterModule.forChild(campo_indicador_dados_routes); 