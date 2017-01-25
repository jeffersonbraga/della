import { NgModule }      from '@angular/core'; 
import { CommonModule } from '@angular/common';  
import { ServicoDadosComponent } from './servico_dados.component'; 
import { ServicoDadosDetailsComponent } from './servico_dadosDetails.component';
import { ServicoDadosEditComponent } from './servico_dadosEdit.component';
import { ServicoDadosProdutosComponent } from './servico_dadosProdutos.component';
import { SharedModule }   from '../../../shared/shared.module'; 
import { servico_dados_routing } from './servico_dados.routing';  

@NgModule({   
    imports:      
    [ CommonModule, servico_dados_routing, SharedModule ],   
    declarations: 
    [ ServicoDadosComponent, ServicoDadosDetailsComponent, ServicoDadosEditComponent, ServicoDadosProdutosComponent ] 
}) 

export default class AppModule { }