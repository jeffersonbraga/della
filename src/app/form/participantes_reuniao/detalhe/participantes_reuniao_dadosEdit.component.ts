import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Participantes_reuniao } from '../../../modelo/Participantes_reuniao'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'participantes_reuniao-dados-edit',   templateUrl: 'participantes_reuniao_dadosEdit.component.html' }) export class Participantes_reuniaoDadosEditComponent implements OnInit {    participantes_reuniao: Participantes_reuniao;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.participantes_reuniao.Participantes_reuniao";                 let id = +params['id'];         this.participantes_reuniao = new Participantes_reuniao();         this.participantes_reuniao.cd_participantes_reuniao = id;         o.objetoJson = this.participantes_reuniao;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a participantes_reuniao. ';       }      this.participantes_reuniao = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }