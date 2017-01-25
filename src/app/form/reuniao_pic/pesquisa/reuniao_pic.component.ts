import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Reuniao_pic } from '../../../modelo/Reuniao_pic'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'reuniao_pic-selector',   templateUrl: 'reuniao_pic.component.html' })  export class Reuniao_picComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Reuniao_pic[] = [];     reuniao_picAux : Reuniao_pic;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.reuniao_picAux = new Reuniao_pic(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.reuniao_pic.Reuniao_pic';         dataAux.objetoJson = this.reuniao_picAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Reuniao_pic. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }