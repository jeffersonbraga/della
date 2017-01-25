import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Faixa_class_auditoria } from '../../../modelo/Faixa_class_auditoria'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'faixa_class_auditoria-selector',   templateUrl: 'faixa_class_auditoria.component.html' })  export class Faixa_class_auditoriaComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Faixa_class_auditoria[] = [];     faixa_class_auditoriaAux : Faixa_class_auditoria;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.faixa_class_auditoriaAux = new Faixa_class_auditoria(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.faixa_class_auditoria.Faixa_class_auditoria';         dataAux.objetoJson = this.faixa_class_auditoriaAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Faixa_class_auditoria. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }