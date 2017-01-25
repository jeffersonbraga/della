import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Produto } from '../../../modelo/Produto'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'produto-selector',   templateUrl: 'produto.component.html' })  export class ProdutoComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Produto[] = [];     produtoAux : Produto;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.produtoAux = new Produto(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.produto.Produto';         dataAux.objetoJson = this.produtoAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Produto. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }