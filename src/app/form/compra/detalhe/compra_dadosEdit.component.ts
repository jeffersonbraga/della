import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs/Subscription';  
import { Compra } from '../../../modelo/Compra'; 
import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; 
import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service'; 
import { CrudService } from '../../../core/services/crud/crud.service'; 

@Component({   
    moduleId: module.id,   
    selector: 'compra-dados-edit',   
    templateUrl: 'compra_dadosEdit.component.html' 
}) 

export class CompraDadosEditComponent implements OnInit {    

    compra: Compra;    
    private sub: Subscription;    
    private errorMessage: string;     
    
    constructor(private router: Router,               
                private route: ActivatedRoute,               
                private pesquisaService: PesquisaService,               
                private crudService: CrudService) { }    

    ngOnInit() {       

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.compra.Compra";                 
            let id = +params['id'];         
            this.compra = new Compra();

            if (id > -1) {

                this.compra.cd_compra = id;         
                o.objetoJson = this.compra;          
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
        
        this.compra = result;
        this.compra.listaProdutos_compra = [];   
    }    
    
    ngOnDestroy() {     this.sub.unsubscribe();   }     
    
    onSubmit() {      
        
        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.compra.Compra";         
            o.objetoJson = this.compra;          
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
            this.errorMessage = 'Houve um erro ao pesquisar a compra. ';       
        }

        event.preventDefault();     
        this.router.navigate(['/dados-compra/']); 
    }

    btnExcluirClickHandler() {

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.compra.Compra";         
            o.objetoJson = this.compra;          
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
        this.router.navigate(['/dados-compra/']); 
    }        
}