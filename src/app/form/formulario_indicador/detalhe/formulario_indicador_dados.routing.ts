import { Routes, RouterModule } from '@angular/router';  import { Formulario_indicadorDadosComponent }   from './formulario_indicador_dados.component'; import { Formulario_indicadorDadosDetailsComponent } from './formulario_indicador_dadosDetails.component'; import { Formulario_indicadorDadosEditComponent } from './formulario_indicador_dadosEdit.component';  const formulario_indicador_dados_routes: Routes = [   {     path: '',     component: Formulario_indicadorDadosComponent,     children: [       { path:'details', component: Formulario_indicadorDadosDetailsComponent },       { path:'edit', component: Formulario_indicadorDadosEditComponent }     ]   } ];  export const formulario_indicador_dados_routing = RouterModule.forChild(formulario_indicador_dados_routes); 