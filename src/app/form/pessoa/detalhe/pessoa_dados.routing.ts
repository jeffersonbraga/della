import { Routes, RouterModule } from '@angular/router';  
import { PessoaDadosComponent }   from './pessoa_dados.component'; 
import { PessoaDadosDetailsComponent } from './pessoa_dadosDetails.component'; 
import { PessoaDadosEditComponent } from './pessoa_dadosEdit.component';  
import { PessoaDadosInfoComponent } from './pessoa_dadosInfo.component';  

const pessoa_dados_routes: Routes = [   
    {     path: '',     component: PessoaDadosComponent,     children: [       
        { path:'details', component: PessoaDadosDetailsComponent },       
        { path:'edit', component: PessoaDadosEditComponent },       
        { path:'info', component: PessoaDadosInfoComponent }
    ]   
    } 
];  

export const pessoa_dados_routing = RouterModule.forChild(pessoa_dados_routes); 