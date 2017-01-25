import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Produto_servico } from '../../../modelo/Produto_servico'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'produto_servico-selector',   templateUrl: 'produto_servico.component.html' })  export class Produto_servicoComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Produto_servico[] = [];     produto_servicoAux : Produto_servico;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.produto_servicoAux = new Produto_servico(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.produto_servico.Produto_servico';         dataAux.objetoJson = this.produto_servicoAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Produto_servico. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }