import { Routes, RouterModule } from '@angular/router';  import { FabricanteDadosComponent }   from './fabricante_dados.component'; import { FabricanteDadosDetailsComponent } from './fabricante_dadosDetails.component'; import { FabricanteDadosEditComponent } from './fabricante_dadosEdit.component';  const fabricante_dados_routes: Routes = [   {     path: '',     component: FabricanteDadosComponent,     children: [       { path:'details', component: FabricanteDadosDetailsComponent },       { path:'edit', component: FabricanteDadosEditComponent }     ]   } ];  export const fabricante_dados_routing = RouterModule.forChild(fabricante_dados_routes); 