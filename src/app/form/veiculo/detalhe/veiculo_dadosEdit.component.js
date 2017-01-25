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
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var crud_service_1 = require('../../../core/services/crud/crud.service');
var VeiculoDadosEditComponent = (function () {
    function VeiculoDadosEditComponent(router, route, pesquisaService, crudService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
        this.crudService = crudService;
    }
    VeiculoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.veiculo.Veiculo";
            var id = +params['id'];
            _this.veiculo = new Veiculo_1.Veiculo();
            if (id > -1) {
                _this.veiculo.cd_veiculo = id;
                o.objetoJson = _this.veiculo;
                _this.pesquisaService.efetuarPesquisa(o)
                    .subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    VeiculoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisa o veículo. ';
        }
        this.veiculo = result;
    };
    VeiculoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    VeiculoDadosEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.veiculo.Veiculo";
            o.objetoJson = _this.veiculo;
            _this.crudService.salvarObjetoCompleto(o)
                .subscribe(function (result) { return _this.onSalvarObjeto(result); }, function (error) { return _this.errorMessage = error; });
        });
    };
    VeiculoDadosEditComponent.prototype.onCancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/']);
    };
    VeiculoDadosEditComponent.prototype.onSalvarObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar o veículo. ';
        }
        event.preventDefault();
        this.router.navigate(['/dados-veiculo/']);
    };
    VeiculoDadosEditComponent.prototype.btnExcluirClickHandler = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.veiculo.Veiculo";
            o.objetoJson = _this.veiculo;
            _this.crudService.excluirObjetoCompleto(o)
                .subscribe(function (result) { return _this.onExcluirObjeto(result); }, function (error) { return _this.errorMessage = error; });
        });
    };
    VeiculoDadosEditComponent.prototype.onExcluirObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisar o veículo. ';
        }
        event.preventDefault();
        this.router.navigate(['/dados-veiculo/']);
    };
    VeiculoDadosEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'veiculo-dados-edit',
            templateUrl: 'veiculo_dadosEdit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService, crud_service_1.CrudService])
    ], VeiculoDadosEditComponent);
    return VeiculoDadosEditComponent;
}());
exports.VeiculoDadosEditComponent = VeiculoDadosEditComponent;
//# sourceMappingURL=veiculo_dadosEdit.component.js.map