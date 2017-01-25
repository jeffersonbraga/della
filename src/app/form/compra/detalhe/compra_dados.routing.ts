import { Routes, RouterModule } from '@angular/router';  
import { CompraDadosComponent }   from './compra_dados.component'; 
import { CompraDadosDetailsComponent } from './compra_dadosDetails.component'; 
import { CompraDadosEditComponent } from './compra_dadosEdit.component';  

const compra_dados_routes: Routes = [   
    
    {     path: '',     component: CompraDadosComponent,     
        children: [       
            { path:'details', component: CompraDadosDetailsComponent },       
            { path:'edit', component: CompraDadosEditComponent }     
            ]   
    } 
];  

export const compra_dados_routing = RouterModule.forChild(compra_dados_routes); 