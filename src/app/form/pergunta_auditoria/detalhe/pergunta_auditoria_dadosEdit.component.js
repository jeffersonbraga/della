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
var Pergunta_auditoria_1 = require('../../../modelo/Pergunta_auditoria');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Pergunta_auditoriaDadosEditComponent = (function () {
    function Pergunta_auditoriaDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Pergunta_auditoriaDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.pergunta_auditoria.Pergunta_auditoria"; var id = +params['id']; _this.pergunta_auditoria = new Pergunta_auditoria_1.Pergunta_auditoria(); _this.pergunta_auditoria.cd_pergunta_auditoria = id; o.objetoJson = _this.pergunta_auditoria; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Pergunta_auditoriaDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a pergunta_auditoria. ';
    } this.pergunta_auditoria = result; };
    Pergunta_auditoriaDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Pergunta_auditoriaDadosEditComponent.prototype.onSubmit = function () { };
    Pergunta_auditoriaDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Pergunta_auditoriaDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'pergunta_auditoria-dados-edit', templateUrl: 'pergunta_auditoria_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Pergunta_auditoriaDadosEditComponent);
    return Pergunta_auditoriaDadosEditComponent;
}());
exports.Pergunta_auditoriaDadosEditComponent = Pergunta_auditoriaDadosEditComponent;
//# sourceMappingURL=pergunta_auditoria_dadosEdit.component.js.map