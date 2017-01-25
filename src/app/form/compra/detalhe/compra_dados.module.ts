import { NgModule }      from '@angular/core'; 
import { CommonModule } from '@angular/common';  
import { CompraDadosComponent } from './compra_dados.component'; 
import { CompraDadosDetailsComponent } from './compra_dadosDetails.component'; 
import { CompraDadosEditComponent } from './compra_dadosEdit.component'; 
import { CompraDadosProdutosComponent } from './compra_dadosProdutos.component'; 
import { SharedModule }   from '../../../shared/shared.module'; 
import { compra_dados_routing } from './compra_dados.routing';  

@NgModule({   
    imports:      
    [ CommonModule, compra_dados_routing, SharedModule ],   
    declarations: 
    [ CompraDadosComponent, CompraDadosDetailsComponent, CompraDadosEditComponent, CompraDadosProdutosComponent ] 
}) 

export default class AppModule { }