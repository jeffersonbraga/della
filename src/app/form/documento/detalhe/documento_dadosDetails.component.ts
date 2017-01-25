import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Documento } from '../../../modelo/Documento'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'documento-dados-details',   templateUrl: 'documento_dadosDetails.component.html' }) export class DocumentoDadosDetailsComponent implements OnInit {    documento: Documento;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.documento.Documento";                 let id = +params['id'];         this.documento = new Documento();         this.documento.cd_documento = id;         o.objetoJson = this.documento;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a documento. '; }      this.documento = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }