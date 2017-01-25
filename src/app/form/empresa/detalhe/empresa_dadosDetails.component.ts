import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Empresa } from '../../../modelo/Empresa'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'empresa-dados-details',   templateUrl: 'empresa_dadosDetails.component.html' }) export class EmpresaDadosDetailsComponent implements OnInit {    empresa: Empresa;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.empresa.Empresa";                 let id = +params['id'];         this.empresa = new Empresa();         this.empresa.cd_empresa = id;         o.objetoJson = this.empresa;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a empresa. '; }      this.empresa = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }