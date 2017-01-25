import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Configuracao_helpdesk } from '../../../modelo/Configuracao_helpdesk'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'configuracao_helpdesk-selector',   templateUrl: 'configuracao_helpdesk.component.html' })  export class Configuracao_helpdeskComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Configuracao_helpdesk[] = [];     configuracao_helpdeskAux : Configuracao_helpdesk;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.configuracao_helpdeskAux = new Configuracao_helpdesk(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.configuracao_helpdesk.Configuracao_helpdesk';         dataAux.objetoJson = this.configuracao_helpdeskAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Configuracao_helpdesk. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }