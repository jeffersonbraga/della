import { Routes, RouterModule } from '@angular/router';  import { DocumentoComponent } from './documento.component';  const documento_routes: Routes = [   { path: 'documento*', pathMatch:'full', redirectTo: '/documento' },   { path: 'documento', component: DocumentoComponent} ];  export const documento_routing = RouterModule.forChild(documento_routes);