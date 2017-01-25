import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Cronograma_manutencao } from '../../../modelo/Cronograma_manutencao'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'cronograma_manutencao-dados-edit',   templateUrl: 'cronograma_manutencao_dadosEdit.component.html' }) export class Cronograma_manutencaoDadosEditComponent implements OnInit {    cronograma_manutencao: Cronograma_manutencao;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.cronograma_manutencao.Cronograma_manutencao";                 let id = +params['id'];         this.cronograma_manutencao = new Cronograma_manutencao();         this.cronograma_manutencao.cd_cronograma_manutencao = id;         o.objetoJson = this.cronograma_manutencao;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a cronograma_manutencao. ';       }      this.cronograma_manutencao = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }