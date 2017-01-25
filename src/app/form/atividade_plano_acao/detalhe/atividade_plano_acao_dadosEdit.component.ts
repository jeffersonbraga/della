import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Atividade_plano_acao } from '../../../modelo/Atividade_plano_acao'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'atividade_plano_acao-dados-edit',   templateUrl: 'atividade_plano_acao_dadosEdit.component.html' }) export class Atividade_plano_acaoDadosEditComponent implements OnInit {    atividade_plano_acao: Atividade_plano_acao;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.atividade_plano_acao.Atividade_plano_acao";                 let id = +params['id'];         this.atividade_plano_acao = new Atividade_plano_acao();         this.atividade_plano_acao.cd_atividade_plano_acao = id;         o.objetoJson = this.atividade_plano_acao;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a atividade_plano_acao. ';       }      this.atividade_plano_acao = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }