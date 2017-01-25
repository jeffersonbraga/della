import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Helpdesk_ocorrencia } from '../../../modelo/Helpdesk_ocorrencia'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'helpdesk_ocorrencia-dados-details',   templateUrl: 'helpdesk_ocorrencia_dadosDetails.component.html' }) export class Helpdesk_ocorrenciaDadosDetailsComponent implements OnInit {    helpdesk_ocorrencia: Helpdesk_ocorrencia;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.helpdesk_ocorrencia.Helpdesk_ocorrencia";                 let id = +params['id'];         this.helpdesk_ocorrencia = new Helpdesk_ocorrencia();         this.helpdesk_ocorrencia.cd_helpdesk_ocorrencia = id;         o.objetoJson = this.helpdesk_ocorrencia;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a helpdesk_ocorrencia. '; }      this.helpdesk_ocorrencia = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }