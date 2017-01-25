import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Mapa_formulario } from '../../../modelo/Mapa_formulario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'mapa_formulario-dados-details',   templateUrl: 'mapa_formulario_dadosDetails.component.html' }) export class Mapa_formularioDadosDetailsComponent implements OnInit {    mapa_formulario: Mapa_formulario;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.mapa_formulario.Mapa_formulario";                 let id = +params['id'];         this.mapa_formulario = new Mapa_formulario();         this.mapa_formulario.cd_mapa_formulario = id;         o.objetoJson = this.mapa_formulario;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a mapa_formulario. '; }      this.mapa_formulario = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }