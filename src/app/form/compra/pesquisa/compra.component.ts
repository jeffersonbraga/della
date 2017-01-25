import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Compra } from '../../../modelo/Compra'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'compra-selector',   templateUrl: 'compra.component.html' })  export class CompraComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Compra[] = [];     compraAux : Compra;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.compraAux = new Compra(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.compra.Compra';         dataAux.objetoJson = this.compraAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Compra. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }