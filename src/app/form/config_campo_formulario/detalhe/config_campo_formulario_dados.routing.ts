import { Routes, RouterModule } from '@angular/router';  import { Config_campo_formularioDadosComponent }   from './config_campo_formulario_dados.component'; import { Config_campo_formularioDadosDetailsComponent } from './config_campo_formulario_dadosDetails.component'; import { Config_campo_formularioDadosEditComponent } from './config_campo_formulario_dadosEdit.component';  const config_campo_formulario_dados_routes: Routes = [   {     path: '',     component: Config_campo_formularioDadosComponent,     children: [       { path:'details', component: Config_campo_formularioDadosDetailsComponent },       { path:'edit', component: Config_campo_formularioDadosEditComponent }     ]   } ];  export const config_campo_formulario_dados_routing = RouterModule.forChild(config_campo_formulario_dados_routes); 