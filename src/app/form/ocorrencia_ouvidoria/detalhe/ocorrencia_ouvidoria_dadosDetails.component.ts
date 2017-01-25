import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Ocorrencia_ouvidoria } from '../../../modelo/Ocorrencia_ouvidoria'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'ocorrencia_ouvidoria-dados-details',   templateUrl: 'ocorrencia_ouvidoria_dadosDetails.component.html' }) export class Ocorrencia_ouvidoriaDadosDetailsComponent implements OnInit {    ocorrencia_ouvidoria: Ocorrencia_ouvidoria;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.ocorrencia_ouvidoria.Ocorrencia_ouvidoria";                 let id = +params['id'];         this.ocorrencia_ouvidoria = new Ocorrencia_ouvidoria();         this.ocorrencia_ouvidoria.cd_ocorrencia_ouvidoria = id;         o.objetoJson = this.ocorrencia_ouvidoria;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a ocorrencia_ouvidoria. '; }      this.ocorrencia_ouvidoria = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }