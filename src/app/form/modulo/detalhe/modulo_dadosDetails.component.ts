import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Modulo } from '../../../modelo/Modulo'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'modulo-dados-details',   templateUrl: 'modulo_dadosDetails.component.html' }) export class ModuloDadosDetailsComponent implements OnInit {    modulo: Modulo;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.modulo.Modulo";                 let id = +params['id'];         this.modulo = new Modulo();         this.modulo.cd_modulo = id;         o.objetoJson = this.modulo;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a modulo. '; }      this.modulo = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }