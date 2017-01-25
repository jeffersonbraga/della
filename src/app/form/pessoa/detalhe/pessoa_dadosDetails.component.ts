import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs/Subscription';  
import { Pessoa } from '../../../modelo/Pessoa'; 
import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; 
import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  

@Component({   
    moduleId: module.id,   
    selector: 'pessoa-dados-details',   
    templateUrl: 'pessoa_dadosDetails.component.html' 
}) 

export class PessoaDadosDetailsComponent implements OnInit {
        pessoa: Pessoa;    
        private sub: Subscription;    
        private errorMessage: string;    
        
        constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    
        
        ngOnInit() {       
            
            this.sub = this.route.parent.params.subscribe(params => {         
                let o : ObjetoVirtual = new ObjetoVirtual();         
                o.classeJava = "br.com.primum.modelo.pessoa.Pessoa";                 
                let id = +params['id'];         
                this.pessoa = new Pessoa();         
                this.pessoa.cd_pessoa = id;         
                o.objetoJson = this.pessoa;          
                this.pesquisaService.efetuarPesquisa(o)
                             .subscribe(             
                                 result => this.onEfetuarPesquisa(result),             
                                 error =>  this.errorMessage = <any>error);       
            });   
        }    
        
        onEfetuarPesquisa(result : any) {     
            if (!result) {      
                this.errorMessage = 'Houve um erro ao pesquisa a pessoa. '; 
            }      
                this.pessoa = result;   
        }    
        
        ngOnDestroy() {     this.sub.unsubscribe();   } }