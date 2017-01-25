import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs/Subscription';  
import { Veiculo } from '../../../modelo/Veiculo'; 
import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; 
import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service'; 
import { CrudService } from '../../../core/services/crud/crud.service'; 

@Component({   
    moduleId: module.id,   
    selector: 'veiculo-dados-edit',   
    templateUrl: 'veiculo_dadosEdit.component.html' 
}) 

export class VeiculoDadosEditComponent implements OnInit {    

    veiculo: Veiculo;    
    private sub: Subscription;    
    private errorMessage: string;     
    
    constructor(private router: Router,               
                private route: ActivatedRoute,               
                private pesquisaService: PesquisaService,               
                private crudService: CrudService) { }    

    ngOnInit() {       

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.veiculo.Veiculo";                 
            let id = +params['id'];         
            this.veiculo = new Veiculo();

            if (id > -1) {

                this.veiculo.cd_veiculo = id;         
                o.objetoJson = this.veiculo;          
                this.pesquisaService.efetuarPesquisa(o)             
                .subscribe(             
                    result => this.onEfetuarPesquisa(result),             
                    error =>  this.errorMessage = <any>error);
            }
                   
            });   
        }    
    
    onEfetuarPesquisa(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao pesquisa o veículo. ';       
        }      
        
        this.veiculo = result;   
    }    
    
    ngOnDestroy() {     this.sub.unsubscribe();   }     
    
    onSubmit() {      
        
        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.veiculo.Veiculo";         
            o.objetoJson = this.veiculo;          
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
            this.errorMessage = 'Houve um erro ao pesquisar o veículo. ';       
        }

        event.preventDefault();     
        this.router.navigate(['/dados-veiculo/']); 
    }

    btnExcluirClickHandler() {

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.veiculo.Veiculo";         
            o.objetoJson = this.veiculo;          
            this.crudService.excluirObjetoCompleto(o)             
            .subscribe(
                result => this.onExcluirObjeto(result),             
                error =>  this.errorMessage = <any>error);       
            }
        );
    }    

    onExcluirObjeto(result : any) {     
        if (!result) {       
            this.errorMessage = 'Houve um erro ao pesquisar o veículo. ';       
        }

        event.preventDefault();     
        this.router.navigate(['/dados-veiculo/']); 
    }        
}