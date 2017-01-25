import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Sub_formulario } from '../../../modelo/Sub_formulario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'sub_formulario-dados-details',   templateUrl: 'sub_formulario_dadosDetails.component.html' }) export class Sub_formularioDadosDetailsComponent implements OnInit {    sub_formulario: Sub_formulario;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.sub_formulario.Sub_formulario";                 let id = +params['id'];         this.sub_formulario = new Sub_formulario();         this.sub_formulario.cd_sub_formulario = id;         o.objetoJson = this.sub_formulario;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a sub_formulario. '; }      this.sub_formulario = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }