import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Classificacao_auditoria } from '../../../modelo/Classificacao_auditoria'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'classificacao_auditoria-selector',   templateUrl: 'classificacao_auditoria.component.html' })  export class Classificacao_auditoriaComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Classificacao_auditoria[] = [];     classificacao_auditoriaAux : Classificacao_auditoria;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.classificacao_auditoriaAux = new Classificacao_auditoria(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.classificacao_auditoria.Classificacao_auditoria';         dataAux.objetoJson = this.classificacao_auditoriaAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Classificacao_auditoria. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }