import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Planos_cronograma_auditoria } from '../../../modelo/Planos_cronograma_auditoria'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'planos_cronograma_auditoria-selector',   templateUrl: 'planos_cronograma_auditoria.component.html' })  export class Planos_cronograma_auditoriaComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Planos_cronograma_auditoria[] = [];     planos_cronograma_auditoriaAux : Planos_cronograma_auditoria;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.planos_cronograma_auditoriaAux = new Planos_cronograma_auditoria(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.planos_cronograma_auditoria.Planos_cronograma_auditoria';         dataAux.objetoJson = this.planos_cronograma_auditoriaAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Planos_cronograma_auditoria. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }