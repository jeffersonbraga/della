import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs/Subscription';  
import { Pessoa } from '../../../modelo/Pessoa'; 
import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; 
import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service'; 
import { CrudService } from '../../../core/services/crud/crud.service'; 

@Component({   
    moduleId: module.id,   
    selector: 'pessoa-dados-edit',   
    templateUrl: 'pessoa_dadosEdit.component.html' 
}) 

export class PessoaDadosEditComponent implements OnInit {    

    pessoa: Pessoa;    
    private sub: Subscription;    
    private errorMessage: string;     
    
    constructor(private router: Router,               
                private route: ActivatedRoute,               
                private pesquisaService: PesquisaService,               
                private crudService: CrudService) { }    

    ngOnInit() {       

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.pessoa.Pessoa";                 
            let id = +params['id'];         
            this.pessoa = new Pessoa();

            if (id > -1) {

                this.pessoa.cd_pessoa = id;         
                o.objetoJson = this.pessoa;          
                this.pesquisaService.efetuarPesquisa(o)             
                .subscribe(             
                    result => this.onEfetuarPesquisa(result),             
                    error =>  this.errorMessage = <any>error);
            }
                   
            });   
        }    
    
    onEfetuarPesquisa(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao pesquisa a pessoa. ';       
        }      
        
        this.pessoa = result;   
    }    
    
    ngOnDestroy() {     this.sub.unsubscribe();   }     
    
    onSubmit() {      
        
        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.pessoa.Pessoa";         
            o.objetoJson = this.pessoa;          
            this.crudService.salvarObjetoCompleto(o)             
            .subscribe(
                result => this.onSalvarObjeto(result),             
                error =>  this.errorMessage = <any>error);       
            });
    }     

    onCancel(event: Event) {     
        event.preventDefault();     
        this.router.navigate(['/']);   
    }   

    onSalvarObjeto(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao pesquisa a pessoa. ';       
        }

        event.preventDefault();     
        this.router.navigate(['/dados-pessoa/']); 
    }

    btnExcluirClickHandler() {

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.pessoa.Pessoa";         
            o.objetoJson = this.pessoa;          
            this.crudService.excluirObjetoCompleto(o)             
            .subscribe(
                result => this.onExcluirObjeto(result),             
                error =>  this.errorMessage = <any>error);       
            }
        );
    }    

    onExcluirObjeto(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao pesquisa a pessoa. ';       
        }

        event.preventDefault();     
        this.router.navigate(['/dados-pessoa/']); 
    }        
}