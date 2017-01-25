"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Veiculo_1 = require('../../../modelo/Veiculo');
var Compra_1 = require('../../../modelo/Compra');
var Servico_1 = require('../../../modelo/Servico');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var crud_service_1 = require('../../../core/services/crud/crud.service');
var PessoaDadosInfoComponent = (function () {
    function PessoaDadosInfoComponent(router, route, pesquisaService, crudService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
        this.crudService = crudService;
        this.listaVeiculo = [];
        this.listaServico = [];
        this.listaCompra = [];
    }
    PessoaDadosInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.veiculo.Veiculo";
            var id = +params['id'];
            var veiculo = new Veiculo_1.Veiculo();
            if (id > -1) {
                veiculo.cd_pessoa = id;
                o.objetoJson = veiculo;
                _this.pesquisaService.efetuarPesquisa(o)
                    .subscribe(function (result) { return _this.onEfetuarPesquisaVeiculo(result); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    PessoaDadosInfoComponent.prototype.onEfetuarPesquisaVeiculo = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar os veículos. ';
        }
        this.listaVeiculo = result;
        this.buscarServicos();
    };
    PessoaDadosInfoComponent.prototype.buscarServicos = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.servico.Servico";
            var id = +params['id'];
            var servico = new Servico_1.Servico();
            if (id > -1) {
                servico.cd_pessoa = id;
                o.objetoJson = servico;
                _this.pesquisaService.efetuarPesquisa(o)
                    .subscribe(function (result) { return _this.onEfetuarPesquisaServicos(result); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    PessoaDadosInfoComponent.prototype.onEfetuarPesquisaServicos = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar os serviços. ';
        }
        this.listaServico = result;
        this.buscarCompras();
    };
    PessoaDadosInfoComponent.prototype.buscarCompras = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.compra.Compra";
            var id = +params['id'];
            var compra = new Compra_1.Compra();
            if (id > -1) {
                compra.cd_pessoa = id;
                o.objetoJson = compra;
                _this.pesquisaService.efetuarPesquisa(o)
                    .subscribe(function (result) { return _this.onEfetuarPesquisaCompras(result); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    PessoaDadosInfoComponent.prototype.onEfetuarPesquisaCompras = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar as compras. ';
        }
        this.listaCompra = result;
    };
    PessoaDadosInfoComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    PessoaDadosInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pessoa-dados-info',
            templateUrl: 'pessoa_dadosInfo.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService, crud_service_1.CrudService])
    ], PessoaDadosInfoComponent);
    return PessoaDadosInfoComponent;
}());
exports.PessoaDadosInfoComponent = PessoaDadosInfoComponent;
//# sourceMappingURL=pessoa_dadosInfo.component.js.map