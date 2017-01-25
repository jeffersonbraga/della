import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs/Subscription';  
import { Produto } from '../../../modelo/Produto'; 
import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; 
import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service'; 
import { CrudService } from '../../../core/services/crud/crud.service'; 

@Component({   
    moduleId: module.id,   
    selector: 'produto-dados-edit',   
    templateUrl: 'produto_dadosEdit.component.html' 
}) 

export class ProdutoDadosEditComponent implements OnInit {    

    produto: Produto;    
    private sub: Subscription;    
    private errorMessage: string;     

    constructor(private router: Router,               
                private route: ActivatedRoute,               
                private pesquisaService: PesquisaService,               
                private crudService: CrudService) { }    

    ngOnInit() {       

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.produto.Produto";                 
            let id = +params['id'];         
            this.produto = new Produto();

            if (id > -1) {

                this.produto.cd_produto = id;         
                o.objetoJson = this.produto;          
                this.pesquisaService.efetuarPesquisa(o)             
                .subscribe(             
                    result => this.onEfetuarPesquisa(result),             
                    error =>  this.errorMessage = <any>error);
            }

        });   
    }    

    onEfetuarPesquisa(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao pesquisar o produto. ';       
        }      
        
        this.produto = result;   
    }    
    
    ngOnDestroy() {     this.sub.unsubscribe();   }     
    
    onSubmit() {      
        
        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.produto.Produto";         
            o.objetoJson = this.produto;          
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
            this.errorMessage = 'Houve um erro ao pesquisar o produto. ';       
        }

        event.preventDefault();     
        this.router.navigate(['/dados-produto/']); 
    }

    btnExcluirClickHandler() {

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.produto.Produto";         
            o.objetoJson = this.produto;          
            this.crudService.excluirObjetoCompleto(o)             
            .subscribe(
                result => this.onExcluirObjeto(result),             
                error =>  this.errorMessage = <any>error);       
            }
        );
    }    

    onExcluirObjeto(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao pesquisar o produto. ';       
        }

        event.preventDefault();     
        this.router.navigate(['/dados-produto/']); 
    }        
}