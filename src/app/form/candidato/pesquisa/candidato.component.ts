import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Candidato } from '../../../modelo/Candidato'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'candidato-selector',   templateUrl: 'candidato.component.html' })  export class CandidatoComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Candidato[] = [];     candidatoAux : Candidato;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.candidatoAux = new Candidato(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.candidato.Candidato';         dataAux.objetoJson = this.candidatoAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Candidato. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }