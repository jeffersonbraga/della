import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Campo_formulario } from '../../../modelo/Campo_formulario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'campo_formulario-selector',   templateUrl: 'campo_formulario.component.html' })  export class Campo_formularioComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Campo_formulario[] = [];     campo_formularioAux : Campo_formulario;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.campo_formularioAux = new Campo_formulario(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.campo_formulario.Campo_formulario';         dataAux.objetoJson = this.campo_formularioAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Campo_formulario. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }