import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Notificacao_automatica } from '../../../modelo/Notificacao_automatica'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'notificacao_automatica-dados-edit',   templateUrl: 'notificacao_automatica_dadosEdit.component.html' }) export class Notificacao_automaticaDadosEditComponent implements OnInit {    notificacao_automatica: Notificacao_automatica;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.notificacao_automatica.Notificacao_automatica";                 let id = +params['id'];         this.notificacao_automatica = new Notificacao_automatica();         this.notificacao_automatica.cd_notificacao_automatica = id;         o.objetoJson = this.notificacao_automatica;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a notificacao_automatica. ';       }      this.notificacao_automatica = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }