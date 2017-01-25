import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Documento_pic } from '../../../modelo/Documento_pic'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'documento_pic-dados-details',   templateUrl: 'documento_pic_dadosDetails.component.html' }) export class Documento_picDadosDetailsComponent implements OnInit {    documento_pic: Documento_pic;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.documento_pic.Documento_pic";                 let id = +params['id'];         this.documento_pic = new Documento_pic();         this.documento_pic.cd_documento_pic = id;         o.objetoJson = this.documento_pic;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a documento_pic. '; }      this.documento_pic = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }