import { Routes, RouterModule } from '@angular/router';  import { ReuniaoDadosComponent }   from './reuniao_dados.component'; import { ReuniaoDadosDetailsComponent } from './reuniao_dadosDetails.component'; import { ReuniaoDadosEditComponent } from './reuniao_dadosEdit.component';  const reuniao_dados_routes: Routes = [   {     path: '',     component: ReuniaoDadosComponent,     children: [       { path:'details', component: ReuniaoDadosDetailsComponent },       { path:'edit', component: ReuniaoDadosEditComponent }     ]   } ];  export const reuniao_dados_routing = RouterModule.forChild(reuniao_dados_routes); 