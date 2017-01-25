import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Doc_revisao_formulario } from '../../../modelo/Doc_revisao_formulario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'doc_revisao_formulario-selector',   templateUrl: 'doc_revisao_formulario.component.html' })  export class Doc_revisao_formularioComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Doc_revisao_formulario[] = [];     doc_revisao_formularioAux : Doc_revisao_formulario;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.doc_revisao_formularioAux = new Doc_revisao_formulario(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.doc_revisao_formulario.Doc_revisao_formulario';         dataAux.objetoJson = this.doc_revisao_formularioAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Doc_revisao_formulario. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }