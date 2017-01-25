import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Equipe_cronograma_auditoria } from '../../../modelo/Equipe_cronograma_auditoria'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'equipe_cronograma_auditoria-dados-edit',   templateUrl: 'equipe_cronograma_auditoria_dadosEdit.component.html' }) export class Equipe_cronograma_auditoriaDadosEditComponent implements OnInit {    equipe_cronograma_auditoria: Equipe_cronograma_auditoria;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.equipe_cronograma_auditoria.Equipe_cronograma_auditoria";                 let id = +params['id'];         this.equipe_cronograma_auditoria = new Equipe_cronograma_auditoria();         this.equipe_cronograma_auditoria.cd_equipe_cronograma_auditoria = id;         o.objetoJson = this.equipe_cronograma_auditoria;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a equipe_cronograma_auditoria. ';       }      this.equipe_cronograma_auditoria = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }