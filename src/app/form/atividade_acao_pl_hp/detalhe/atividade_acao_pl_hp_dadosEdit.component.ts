import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Atividade_acao_pl_hp } from '../../../modelo/Atividade_acao_pl_hp'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'atividade_acao_pl_hp-dados-edit',   templateUrl: 'atividade_acao_pl_hp_dadosEdit.component.html' }) export class Atividade_acao_pl_hpDadosEditComponent implements OnInit {    atividade_acao_pl_hp: Atividade_acao_pl_hp;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.atividade_acao_pl_hp.Atividade_acao_pl_hp";                 let id = +params['id'];         this.atividade_acao_pl_hp = new Atividade_acao_pl_hp();         this.atividade_acao_pl_hp.cd_atividade_acao_pl_hp = id;         o.objetoJson = this.atividade_acao_pl_hp;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a atividade_acao_pl_hp. ';       }      this.atividade_acao_pl_hp = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }