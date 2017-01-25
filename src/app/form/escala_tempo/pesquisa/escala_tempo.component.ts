import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Escala_tempo } from '../../../modelo/Escala_tempo'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'escala_tempo-selector',   templateUrl: 'escala_tempo.component.html' })  export class Escala_tempoComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Escala_tempo[] = [];     escala_tempoAux : Escala_tempo;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.escala_tempoAux = new Escala_tempo(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.escala_tempo.Escala_tempo';         dataAux.objetoJson = this.escala_tempoAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Escala_tempo. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }