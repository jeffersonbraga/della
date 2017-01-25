import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Plano_acao } from '../../../modelo/Plano_acao'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'plano_acao-dados-edit',   templateUrl: 'plano_acao_dadosEdit.component.html' }) export class Plano_acaoDadosEditComponent implements OnInit {    plano_acao: Plano_acao;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.plano_acao.Plano_acao";                 let id = +params['id'];         this.plano_acao = new Plano_acao();         this.plano_acao.cd_plano_acao = id;         o.objetoJson = this.plano_acao;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a plano_acao. ';       }      this.plano_acao = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }