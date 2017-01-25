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
var Pergunta_avaliacao_ideia_1 = require('../../../modelo/Pergunta_avaliacao_ideia');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Pergunta_avaliacao_ideiaDadosEditComponent = (function () {
    function Pergunta_avaliacao_ideiaDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Pergunta_avaliacao_ideiaDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.pergunta_avaliacao_ideia.Pergunta_avaliacao_ideia"; var id = +params['id']; _this.pergunta_avaliacao_ideia = new Pergunta_avaliacao_ideia_1.Pergunta_avaliacao_ideia(); _this.pergunta_avaliacao_ideia.cd_pergunta_avaliacao_ideia = id; o.objetoJson = _this.pergunta_avaliacao_ideia; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Pergunta_avaliacao_ideiaDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a pergunta_avaliacao_ideia. ';
    } this.pergunta_avaliacao_ideia = result; };
    Pergunta_avaliacao_ideiaDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Pergunta_avaliacao_ideiaDadosEditComponent.prototype.onSubmit = function () { };
    Pergunta_avaliacao_ideiaDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Pergunta_avaliacao_ideiaDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'pergunta_avaliacao_ideia-dados-edit', templateUrl: 'pergunta_avaliacao_ideia_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Pergunta_avaliacao_ideiaDadosEditComponent);
    return Pergunta_avaliacao_ideiaDadosEditComponent;
}());
exports.Pergunta_avaliacao_ideiaDadosEditComponent = Pergunta_avaliacao_ideiaDadosEditComponent;
//# sourceMappingURL=pergunta_avaliacao_ideia_dadosEdit.component.js.map