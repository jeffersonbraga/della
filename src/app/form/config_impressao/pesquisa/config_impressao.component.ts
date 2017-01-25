import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Config_impressao } from '../../../modelo/Config_impressao'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'config_impressao-selector',   templateUrl: 'config_impressao.component.html' })  export class Config_impressaoComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Config_impressao[] = [];     config_impressaoAux : Config_impressao;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.config_impressaoAux = new Config_impressao(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.config_impressao.Config_impressao';         dataAux.objetoJson = this.config_impressaoAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Config_impressao. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }