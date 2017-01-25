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
var Pessoa_1 = require('../../../modelo/Pessoa');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var crud_service_1 = require('../../../core/services/crud/crud.service');
var PessoaDadosEditComponent = (function () {
    function PessoaDadosEditComponent(router, route, pesquisaService, crudService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
        this.crudService = crudService;
    }
    PessoaDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.pessoa.Pessoa";
            var id = +params['id'];
            _this.pessoa = new Pessoa_1.Pessoa();
            if (id > -1) {
                _this.pessoa.cd_pessoa = id;
                o.objetoJson = _this.pessoa;
                _this.pesquisaService.efetuarPesquisa(o)
                    .subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    PessoaDadosEditComponent.prototype.onEfetuarPesquisa = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisa a pessoa. ';
        }
        this.pessoa = result;
    };
    PessoaDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    PessoaDadosEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.pessoa.Pessoa";
            o.objetoJson = _this.pessoa;
            _this.crudService.salvarObjetoCompleto(o)
                .subscribe(function (result) { return _this.onSalvarObjeto(result); }, function (error) { return _this.errorMessage = error; });
        });
    };
    PessoaDadosEditComponent.prototype.onCancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/']);
    };
    PessoaDadosEditComponent.prototype.onSalvarObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisa a pessoa. ';
        }
        event.preventDefault();
        this.router.navigate(['/dados-pessoa/']);
    };
    PessoaDadosEditComponent.prototype.btnExcluirClickHandler = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var o = new ObjetoVirtual_1.ObjetoVirtual();
            o.classeJava = "br.com.primum.modelo.pessoa.Pessoa";
            o.objetoJson = _this.pessoa;
            _this.crudService.excluirObjetoCompleto(o)
                .subscribe(function (result) { return _this.onExcluirObjeto(result); }, function (error) { return _this.errorMessage = error; });
        });
    };
    PessoaDadosEditComponent.prototype.onExcluirObjeto = function (result) {
        if (!result) {
            this.errorMessage = 'Houve um erro ao pesquisa a pessoa. ';
        }
        event.preventDefault();
        this.router.navigate(['/dados-pessoa/']);
    };
    PessoaDadosEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pessoa-dados-edit',
            templateUrl: 'pessoa_dadosEdit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService, crud_service_1.CrudService])
    ], PessoaDadosEditComponent);
    return PessoaDadosEditComponent;
}());
exports.PessoaDadosEditComponent = PessoaDadosEditComponent;
//# sourceMappingURL=pessoa_dadosEdit.component.js.map