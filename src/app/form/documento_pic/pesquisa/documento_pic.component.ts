import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Documento_pic } from '../../../modelo/Documento_pic'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'documento_pic-selector',   templateUrl: 'documento_pic.component.html' })  export class Documento_picComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Documento_pic[] = [];     documento_picAux : Documento_pic;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.documento_picAux = new Documento_pic(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.documento_pic.Documento_pic';         dataAux.objetoJson = this.documento_picAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Documento_pic. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }