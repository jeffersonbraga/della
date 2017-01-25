import { Component, OnInit, Input } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs/Subscription';  
import { Produto_compra } from '../../../modelo/Produto_compra'; 
import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; 
import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service'; 
import { CrudService } from '../../../core/services/crud/crud.service'; 

@Component({   
    moduleId: module.id,   
    selector: 'compra-dados-produtos',   
    templateUrl: 'compra_dadosProdutos.component.html' 
}) 

export class CompraDadosProdutosComponent implements OnInit {    

    produto_compra: Produto_compra;

    @Input("lista-dados") listaProdutoCompra : Produto_compra[];

    private sub: Subscription;

    private errorMessage: string;     
    
    constructor(private router: Router,               
                private route: ActivatedRoute,               
                private pesquisaService: PesquisaService,               
                private crudService: CrudService) { }    

    ngOnInit() {       

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.produto_compra.Produto_compra";                 
            let id = +params['id'];         
            this.produto_compra = new Produto_compra();

            if (id > -1) {

                this.produto_compra.cd_compra = id;         
                o.objetoJson = this.produto_compra;          
                this.pesquisaService.efetuarPesquisa(o)             
                .subscribe(             
                    result => this.onEfetuarPesquisa(result),             
                    error =>  this.errorMessage = <any>error);
            }
                   
            });   
        }    

    onEfetuarPesquisa(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao pesquisaR a compra. ';       
        }      

        this.produto_compra = result;   
    }    

    ngOnDestroy() {     this.sub.unsubscribe();   }     

    addItemLista(event: Event) {      

        let o : ObjetoVirtual = new ObjetoVirtual();         
        o.classeJava = "br.com.primum.modelo.produto_compra.Produto_compra";         
        o.objetoJson = this.produto_compra;          
        /*this.crudService.salvarObjetoCompleto(o)             
        .subscribe(
        result => this.onSalvarObjeto(result),             
        error =>  this.errorMessage = <any>error);*/

        let it : Produto_compra = new Produto_compra();
        it.cd_produto_compra    = this.produto_compra.cd_produto_compra;
        it.cd_produto           = this.produto_compra.cd_produto;
        it.cd_compra            = this.produto_compra.cd_compra;
        it.nr_quantidade        = this.produto_compra.nr_quantidade;
        it.vl_produto_compra    = this.produto_compra.vl_produto_compra;

        this.listaProdutoCompra.push(it);
        //this.produto_compra = new Produto_compra();
    }     

    onCancel(event: Event) {     
        event.preventDefault();     
        //this.router.navigate(['/']);   
    }   

    onSalvarObjeto(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao pesquisar a compra. ';       
        }

        event.preventDefault();     
        //this.router.navigate(['/dados-compra/']); 
    }

    btnExcluirClickHandler() {

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.produto_compra.Produto_compra";         
            o.objetoJson = this.produto_compra;          
            this.crudService.excluirObjetoCompleto(o)             
            .subscribe(
                result => this.onExcluirObjeto(result),             
                error =>  this.errorMessage = <any>error);       
            }
        );
    }    

    onExcluirObjeto(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao pesquisar a compra. ';       
        }

        event.preventDefault();     
        //this.router.navigate(['/dados-compra/']); 
    }         

    btnCancelarClickHandler(event: Event) {     
           
    }      

    btnNovoClickHandler(event: Event) {     
           
    }  
}