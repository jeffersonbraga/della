import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs/Subscription'; 
import { Compra } from '../../../modelo/Compra'; 
import { Produto_compra } from '../../../modelo/Produto_compra'; 
import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; 
import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service'; 

@Component({ 
    moduleId: module.id, 
    selector: 'compra-dados-details', 
    templateUrl: 'compra_dadosDetails.component.html' 
}) 

export class CompraDadosDetailsComponent implements OnInit {

    listaProdutoCompra : Produto_compra[];  
    compra: Compra; private sub: Subscription; 
    private errorMessage: string; 
    
    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { } 
    
    ngOnInit() { 
        
        this.sub = this.route.parent.params.subscribe(params => { 
            
            let o: ObjetoVirtual = new ObjetoVirtual(); 
            o.classeJava = "br.com.primum.modelo.compra.Compra"; 
            let id = +params['id']; 
            this.compra = new Compra(); 
            this.compra.cd_compra = id; 
            o.objetoJson = this.compra; 
            
            this.pesquisaService.efetuarPesquisa(o).subscribe(
                result => this.onEfetuarPesquisa(result), 
                error => this.errorMessage = <any>error);
        }); 
    } 
            
    onEfetuarPesquisa(result: any) { 
        if (!result) { 
            this.errorMessage = 'Houve um erro ao pesquisa a compra. '; 
        } 
        
        this.compra = result; 
    } 
    
    ngOnDestroy() { 
        this.sub.unsubscribe(); 
    } 
}