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
var Faixa_class_auditoria_1 = require('../../../modelo/Faixa_class_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Faixa_class_auditoriaDadosEditComponent = (function () {
    function Faixa_class_auditoriaDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Faixa_class_auditoriaDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.faixa_class_auditoria.Faixa_class_auditoria"; var id = +params['id']; _this.faixa_class_auditoria = new Faixa_class_auditoria_1.Faixa_class_auditoria(); _this.faixa_class_auditoria.cd_faixa_class_auditoria = id; o.objetoJson = _this.faixa_class_auditoria; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Faixa_class_auditoriaDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a faixa_class_auditoria. ';
    } this.faixa_class_auditoria = result; };
    Faixa_class_auditoriaDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Faixa_class_auditoriaDadosEditComponent.prototype.onSubmit = function () { };
    Faixa_class_auditoriaDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Faixa_class_auditoriaDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'faixa_class_auditoria-dados-edit', templateUrl: 'faixa_class_auditoria_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Faixa_class_auditoriaDadosEditComponent);
    return Faixa_class_auditoriaDadosEditComponent;
}());
exports.Faixa_class_auditoriaDadosEditComponent = Faixa_class_auditoriaDadosEditComponent;
//# sourceMappingURL=faixa_class_auditoria_dadosEdit.component.js.map