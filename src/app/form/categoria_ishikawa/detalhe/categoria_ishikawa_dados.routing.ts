import { Routes, RouterModule } from '@angular/router';  import { Categoria_ishikawaDadosComponent }   from './categoria_ishikawa_dados.component'; import { Categoria_ishikawaDadosDetailsComponent } from './categoria_ishikawa_dadosDetails.component'; import { Categoria_ishikawaDadosEditComponent } from './categoria_ishikawa_dadosEdit.component';  const categoria_ishikawa_dados_routes: Routes = [   {     path: '',     component: Categoria_ishikawaDadosComponent,     children: [       { path:'details', component: Categoria_ishikawaDadosDetailsComponent },       { path:'edit', component: Categoria_ishikawaDadosEditComponent }     ]   } ];  export const categoria_ishikawa_dados_routing = RouterModule.forChild(categoria_ishikawa_dados_routes); 