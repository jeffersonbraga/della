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
var Ocorrencia_periodicidade_1 = require('../../../modelo/Ocorrencia_periodicidade');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Ocorrencia_periodicidadeDadosEditComponent = (function () {
    function Ocorrencia_periodicidadeDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Ocorrencia_periodicidadeDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.ocorrencia_periodicidade.Ocorrencia_periodicidade"; var id = +params['id']; _this.ocorrencia_periodicidade = new Ocorrencia_periodicidade_1.Ocorrencia_periodicidade(); _this.ocorrencia_periodicidade.cd_ocorrencia_periodicidade = id; o.objetoJson = _this.ocorrencia_periodicidade; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Ocorrencia_periodicidadeDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a ocorrencia_periodicidade. ';
    } this.ocorrencia_periodicidade = result; };
    Ocorrencia_periodicidadeDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Ocorrencia_periodicidadeDadosEditComponent.prototype.onSubmit = function () { };
    Ocorrencia_periodicidadeDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Ocorrencia_periodicidadeDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'ocorrencia_periodicidade-dados-edit', templateUrl: 'ocorrencia_periodicidade_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Ocorrencia_periodicidadeDadosEditComponent);
    return Ocorrencia_periodicidadeDadosEditComponent;
}());
exports.Ocorrencia_periodicidadeDadosEditComponent = Ocorrencia_periodicidadeDadosEditComponent;
//# sourceMappingURL=ocorrencia_periodicidade_dadosEdit.component.js.map