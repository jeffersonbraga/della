import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Doc_revisao_formulario } from '../../../modelo/Doc_revisao_formulario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'doc_revisao_formulario-dados-edit',   templateUrl: 'doc_revisao_formulario_dadosEdit.component.html' }) export class Doc_revisao_formularioDadosEditComponent implements OnInit {    doc_revisao_formulario: Doc_revisao_formulario;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.doc_revisao_formulario.Doc_revisao_formulario";                 let id = +params['id'];         this.doc_revisao_formulario = new Doc_revisao_formulario();         this.doc_revisao_formulario.cd_doc_revisao_formulario = id;         o.objetoJson = this.doc_revisao_formulario;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a doc_revisao_formulario. ';       }      this.doc_revisao_formulario = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }