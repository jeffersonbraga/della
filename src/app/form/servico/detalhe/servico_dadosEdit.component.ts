import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs/Subscription';  
import { Servico } from '../../../modelo/Servico'; 
import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; 
import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service'; 
import { CrudService } from '../../../core/services/crud/crud.service'; 

@Component({
    moduleId: module.id,
    selector: 'servico-dados-edit',
    templateUrl: 'servico_dadosEdit.component.html'
})

export class ServicoDadosEditComponent implements OnInit {

    servico: Servico;
    private sub: Subscription;    
    private errorMessage: string;     
    
    constructor(private router: Router,               
                private route: ActivatedRoute,               
                private pesquisaService: PesquisaService,               
                private crudService: CrudService) { }    

    ngOnInit() {       

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.servico.Servico";                 
            let id = +params['id'];         
            this.servico = new Servico();

            if (id > -1) {

                this.servico.cd_servico = id;         
                o.objetoJson = this.servico;          
                this.pesquisaService.efetuarPesquisa(o)             
                .subscribe(             
                    result => this.onEfetuarPesquisa(result),             
                    error =>  this.errorMessage = <any>error);
            }
        });
    }

    onEfetuarPesquisa(result : any) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar o serviço. ';
        }

        this.servico = result;
        this.servico.listaProdutos_servico = [];
    }

    ngOnDestroy() {     this.sub.unsubscribe();   }     

    onSubmit() {      

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.servico.Servico";         
            o.objetoJson = this.servico;
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
            this.errorMessage = 'Houve um erro ao salvar o serviço.';       
        }

        event.preventDefault();     
        this.router.navigate(['/dados-servico/']); 
    }

    btnExcluirClickHandler() {

        this.sub = this.route.parent.params.subscribe(params => {         
            let o : ObjetoVirtual = new ObjetoVirtual();         
            o.classeJava = "br.com.primum.modelo.servico.Servico";         
            o.objetoJson = this.servico;
            this.crudService.excluirObjetoCompleto(o)             
            .subscribe(
                result => this.onExcluirObjeto(result),
                error =>  this.errorMessage = <any>error);
            }
        );
    }

    onExcluirObjeto(result : any) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao excluir o serviço. ';
        }

        event.preventDefault();
        this.router.navigate(['/dados-servico/']);
    }        
}