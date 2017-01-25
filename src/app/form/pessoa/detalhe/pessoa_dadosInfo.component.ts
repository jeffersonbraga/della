import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs/Subscription';  
import { Pessoa } from '../../../modelo/Pessoa'; 
import { Veiculo } from '../../../modelo/Veiculo';
import { Compra } from '../../../modelo/Compra'; 
import { Servico } from '../../../modelo/Servico'; 
import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; 
import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service'; 
import { CrudService } from '../../../core/services/crud/crud.service'; 

@Component({
    moduleId: module.id,
    selector: 'pessoa-dados-info',
    templateUrl: 'pessoa_dadosInfo.component.html'
})

export class PessoaDadosInfoComponent implements OnInit {

    listaVeiculo    : Veiculo[]     = [];

    listaServico    : Servico[]     = [];

    listaCompra     : Compra[]      = [];

    private sub     : Subscription;

    private errorMessage: string;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private pesquisaService: PesquisaService,
                private crudService: CrudService) { }

    ngOnInit() {

        this.sub = this.route.parent.params.subscribe(params => {
            let o : ObjetoVirtual = new ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.veiculo.Veiculo";
            let id = +params['id'];
            let veiculo = new Veiculo();

            if (id > -1) {

                veiculo.cd_pessoa = id;
                o.objetoJson = veiculo;
                this.pesquisaService.efetuarPesquisa(o)
                .subscribe(
                    result => this.onEfetuarPesquisaVeiculo(result),
                    error =>  this.errorMessage = <any>error);
            }

        });
    }

    onEfetuarPesquisaVeiculo(result : any) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar os veículos. ';
        }

        this.listaVeiculo = result;
        this.buscarServicos();
    }

    buscarServicos() {

        this.sub = this.route.parent.params.subscribe(params => {
            let o : ObjetoVirtual = new ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.servico.Servico";
            let id = +params['id'];
            let servico = new Servico();

            if (id > -1) {

                servico.cd_pessoa = id;
                o.objetoJson = servico;
                this.pesquisaService.efetuarPesquisa(o)
                .subscribe(
                    result => this.onEfetuarPesquisaServicos(result),
                    error =>  this.errorMessage = <any>error);
            }

        });
    }

    onEfetuarPesquisaServicos(result : any) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar os serviços. ';
        }

        this.listaServico = result;
        this.buscarCompras();
    }

    buscarCompras() {

        this.sub = this.route.parent.params.subscribe(params => {
            let o : ObjetoVirtual = new ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.compra.Compra";
            let id = +params['id'];
            let compra = new Compra();

            if (id > -1) {

                compra.cd_pessoa = id;
                o.objetoJson = compra;
                this.pesquisaService.efetuarPesquisa(o)
                .subscribe(
                    result => this.onEfetuarPesquisaCompras(result),
                    error =>  this.errorMessage = <any>error);
            }

        });
    }

    onEfetuarPesquisaCompras(result : any) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar as compras. ';
        }

        this.listaCompra = result;
    }

    ngOnDestroy() {     this.sub.unsubscribe();   }
}