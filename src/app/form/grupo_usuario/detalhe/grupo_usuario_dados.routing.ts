import { Routes, RouterModule } from '@angular/router';  import { Grupo_usuarioDadosComponent }   from './grupo_usuario_dados.component'; import { Grupo_usuarioDadosDetailsComponent } from './grupo_usuario_dadosDetails.component'; import { Grupo_usuarioDadosEditComponent } from './grupo_usuario_dadosEdit.component';  const grupo_usuario_dados_routes: Routes = [   {     path: '',     component: Grupo_usuarioDadosComponent,     children: [       { path:'details', component: Grupo_usuarioDadosDetailsComponent },       { path:'edit', component: Grupo_usuarioDadosEditComponent }     ]   } ];  export const grupo_usuario_dados_routing = RouterModule.forChild(grupo_usuario_dados_routes); 