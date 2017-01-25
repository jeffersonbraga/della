import { NgModule }      from '@angular/core'; 
import { CommonModule } from '@angular/common';  
import { SharedModule }   from '../../../shared/shared.module'; 
import { ServicoComponent } from './servico.component'; 
import { servico_routing } from './servico.routing';  

@NgModule({   
    imports:      
    [ CommonModule, servico_routing, SharedModule],   
    declarations: 
    [ ServicoComponent ],   
    exports:      
    [ ServicoComponent ] 
}) 

export class ServicoModule { }