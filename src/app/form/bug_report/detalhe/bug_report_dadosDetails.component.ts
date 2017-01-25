import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Bug_report } from '../../../modelo/Bug_report'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'bug_report-dados-details',   templateUrl: 'bug_report_dadosDetails.component.html' }) export class Bug_reportDadosDetailsComponent implements OnInit {    bug_report: Bug_report;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.bug_report.Bug_report";                 let id = +params['id'];         this.bug_report = new Bug_report();         this.bug_report.cd_bug_report = id;         o.objetoJson = this.bug_report;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a bug_report. '; }      this.bug_report = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }