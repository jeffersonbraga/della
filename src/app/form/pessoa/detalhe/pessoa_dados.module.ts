import { NgModule }      from '@angular/core'; 
import { CommonModule } from '@angular/common';  
import { PessoaDadosComponent } from './pessoa_dados.component'; 
import { PessoaDadosDetailsComponent } from './pessoa_dadosDetails.component'; 
import { PessoaDadosEditComponent } from './pessoa_dadosEdit.component'; 
import { PessoaDadosInfoComponent } from './pessoa_dadosInfo.component';
import { SharedModule }   from '../../../shared/shared.module'; 
import { pessoa_dados_routing } from './pessoa_dados.routing';  

@NgModule({   
    imports:      
    [ CommonModule, pessoa_dados_routing, SharedModule ],   
    declarations: 
    [ PessoaDadosComponent, PessoaDadosDetailsComponent, PessoaDadosEditComponent, PessoaDadosInfoComponent ] 
}) 

export default class AppModule { }