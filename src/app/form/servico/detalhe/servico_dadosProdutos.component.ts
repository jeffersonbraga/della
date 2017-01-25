import { Component, OnInit, Input } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs/Subscription';  
import { Produto_servico } from '../../../modelo/Produto_servico'; 
import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; 
import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service'; 
import { CrudService } from '../../../core/services/crud/crud.service'; 

@Component({   
    moduleId: module.id,   
    selector: 'servico-dados-produtos',   
    templateUrl: 'servico_dadosProdutos.component.html' 
}) 

export class ServicoDadosProdutosComponent implements OnInit {    

    produto_servico: Produto_servico;

    @Input("lista-dados") listaProdutoServico : Produto_servico[];

    private sub: Subscription;

    private errorMessage: string;     

    constructor(private router: Router,               
                private route: ActivatedRoute,               
                private pesquisaService: PesquisaService,               
                private crudService: CrudService) { }    

    ngOnInit() {       

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.produto_servico.Produto_servico";                 
            let id = +params['id'];         
            this.produto_servico = new Produto_servico();

            if (id > -1) {

                this.produto_servico.cd_servico = id;         
                o.objetoJson = this.produto_servico;          
                this.pesquisaService.efetuarPesquisa(o)             
                .subscribe(
                    result => this.onEfetuarPesquisa(result),
                    error =>  this.errorMessage = <any>error);
            }

        });
    }

    onEfetuarPesquisa(result : any) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar os itens do serviço.';
        }

        this.produto_servico = result;
    }

    ngOnDestroy() {     this.sub.unsubscribe();   }     

    addItemLista(event: Event) {      

        let o : ObjetoVirtual = new ObjetoVirtual();         
        o.classeJava = "br.com.primum.modelo.produto_servico.Produto_servico";         
        o.objetoJson = this.produto_servico;
        /*this.crudService.salvarObjetoCompleto(o)             
        .subscribe(
        result => this.onSalvarObjeto(result),             
        error =>  this.errorMessage = <any>error);*/

        let it : Produto_servico    = new Produto_servico();
        it.cd_produto_servico       = this.produto_servico.cd_produto_servico;
        it.cd_produto               = this.produto_servico.cd_produto;
        it.cd_servico               = this.produto_servico.cd_servico;
        it.nr_quantidade            = this.produto_servico.nr_quantidade;
        it.vl_unitario              = this.produto_servico.vl_unitario;

        this.listaProdutoServico.push(it);
        this.produto_servico = new Produto_servico();
    }

    onCancel(event: Event) {     
        event.preventDefault();     
        //this.router.navigate(['/']);   
    }

    onSalvarObjeto(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao salvar itens do serviço. ';       
        }

        event.preventDefault();     
        //this.router.navigate(['/dados-compra/']); 
    }

    btnExcluirClickHandler() {

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.produto_servico.Produto_servico";         
            o.objetoJson = this.produto_servico;          
            this.crudService.excluirObjetoCompleto(o)             
            .subscribe(
                result => this.onExcluirObjeto(result),             
                error =>  this.errorMessage = <any>error);       
            }
        );
    }    

    onExcluirObjeto(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao remover itens do serviço. ';       
        }

        event.preventDefault();     
        //this.router.navigate(['/dados-compra/']); 
    }         

    btnCancelarClickHandler(event: Event) {     

    }      

    btnNovoClickHandler(event: Event) {     

    }  
}