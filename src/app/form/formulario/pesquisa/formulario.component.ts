import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Formulario } from '../../../modelo/Formulario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'formulario-selector',   templateUrl: 'formulario.component.html' })  export class FormularioComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Formulario[] = [];     formularioAux : Formulario;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.formularioAux = new Formulario(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.formulario.Formulario';         dataAux.objetoJson = this.formularioAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Formulario. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }