import { Routes, RouterModule } from '@angular/router';  import { Produto_compraDadosComponent }   from './produto_compra_dados.component'; import { Produto_compraDadosDetailsComponent } from './produto_compra_dadosDetails.component'; import { Produto_compraDadosEditComponent } from './produto_compra_dadosEdit.component';  const produto_compra_dados_routes: Routes = [   {     path: '',     component: Produto_compraDadosComponent,     children: [       { path:'details', component: Produto_compraDadosDetailsComponent },       { path:'edit', component: Produto_compraDadosEditComponent }     ]   } ];  export const produto_compra_dados_routing = RouterModule.forChild(produto_compra_dados_routes); 