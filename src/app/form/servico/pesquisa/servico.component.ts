import { Component, Input, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { Servico } from '../../../modelo/Servico'; 
import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  
import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  

@Component({   
    moduleId: module.id,   
    selector: 'servico-selector',   
    templateUrl: 'servico.component.html' 
})  

export class ServicoComponent implements OnInit { 	 	

    errorMessage : string = '';     

    @Input() listaDadosServ : Servico[] = [];     

    servico : Servico;     

    constructor(        
        private dataService: PesquisaService,        
        private router: Router) { }      

    ngOnInit() {         

        this.servico = new Servico(); 
        let dataAux : ObjetoVirtual = new ObjetoVirtual();         
        dataAux.classeJava  = 'br.com.primum.modelo.servico.Servico';         
        dataAux.objetoJson = this.servico;          
        this.dataService.efetuarPesquisa(dataAux)             
            .subscribe(             
                result => this.onEfetuarPesquisa(result),             
                error =>  this.errorMessage = <any>error);     
    }  	

    onEfetuarPesquisa(result : any) { 		

        if (!result) { 			
            this.errorMessage = 'Houve um erro a pesquisa de Compra. ';             
            this.router.navigate(['/home']); 		
        }          
        this.listaDadosServ = result; 	
    } 
}