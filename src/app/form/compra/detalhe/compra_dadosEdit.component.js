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
var Compra_1 = require('../../../modelo/Compra');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var crud_service_1 = require('../../../core/services/crud/crud.service');
var CompraDadosEditComponent = (function () {
    function CompraDadosEditComponent(router, route, pesquisaService, crudService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
        this.crudService = crudService;
    }
    CompraDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.compra.Compra";
            var id = +params['id'];
            _this.compra = new Compra_1.Compra();
            if (id > -1) {
                _this.compra.cd_compra = id;
                o.objetoJson = _this.compra;
                _this.pesquisaService.efetuarPesquisa(o)
                    .subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    CompraDadosEditComponent.prototype.onEfetuarPesquisa = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisaR a compra. ';
        }
        this.compra = result;
        this.compra.listaProdutos_compra = [];
    };
    CompraDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    CompraDadosEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.compra.Compra";
            o.objetoJson = _this.compra;
            _this.crudService.salvarObjetoCompleto(o)
                .subscribe(function (result) { return _this.onSalvarObjeto(result); }, function (error) { return _this.errorMessage = error; });
        });
    };
    CompraDadosEditComponent.prototype.onCancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/']);
    };
    CompraDadosEditComponent.prototype.onSalvarObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar a compra. ';
        }
        event.preventDefault();
        this.router.navigate(['/dados-compra/']);
    };
    CompraDadosEditComponent.prototype.btnExcluirClickHandler = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.compra.Compra";
            o.objetoJson = _this.compra;
            _this.crudService.excluirObjetoCompleto(o)
                .subscribe(function (result) { return _this.onExcluirObjeto(result); }, function (error) { return _this.errorMessage = error; });
        });
    };
    CompraDadosEditComponent.prototype.onExcluirObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar a compra. ';
        }
        event.preventDefault();
        this.router.navigate(['/dados-compra/']);
    };
    CompraDadosEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'compra-dados-edit',
            templateUrl: 'compra_dadosEdit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService, crud_service_1.CrudService])
    ], CompraDadosEditComponent);
    return CompraDadosEditComponent;
}());
exports.CompraDadosEditComponent = CompraDadosEditComponent;
//# sourceMappingURL=compra_dadosEdit.component.js.map