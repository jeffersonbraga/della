import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Plano_acao_auditoria } from '../../../modelo/Plano_acao_auditoria'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'plano_acao_auditoria-dados-details',   templateUrl: 'plano_acao_auditoria_dadosDetails.component.html' }) export class Plano_acao_auditoriaDadosDetailsComponent implements OnInit {    plano_acao_auditoria: Plano_acao_auditoria;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.plano_acao_auditoria.Plano_acao_auditoria";                 let id = +params['id'];         this.plano_acao_auditoria = new Plano_acao_auditoria();         this.plano_acao_auditoria.cd_plano_acao_auditoria = id;         o.objetoJson = this.plano_acao_auditoria;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a plano_acao_auditoria. '; }      this.plano_acao_auditoria = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }