import { Routes, RouterModule } from '@angular/router';  import { PicDadosComponent }   from './pic_dados.component'; import { PicDadosDetailsComponent } from './pic_dadosDetails.component'; import { PicDadosEditComponent } from './pic_dadosEdit.component';  const pic_dados_routes: Routes = [   {     path: '',     component: PicDadosComponent,     children: [       { path:'details', component: PicDadosDetailsComponent },       { path:'edit', component: PicDadosEditComponent }     ]   } ];  export const pic_dados_routing = RouterModule.forChild(pic_dados_routes); 