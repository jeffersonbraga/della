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
var Evidencia_resposta_exec_1 = require('../../../modelo/Evidencia_resposta_exec');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Evidencia_resposta_execDadosEditComponent = (function () {
    function Evidencia_resposta_execDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Evidencia_resposta_execDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.evidencia_resposta_exec.Evidencia_resposta_exec"; var id = +params['id']; _this.evidencia_resposta_exec = new Evidencia_resposta_exec_1.Evidencia_resposta_exec(); _this.evidencia_resposta_exec.cd_evidencia_resposta_exec = id; o.objetoJson = _this.evidencia_resposta_exec; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Evidencia_resposta_execDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a evidencia_resposta_exec. ';
    } this.evidencia_resposta_exec = result; };
    Evidencia_resposta_execDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Evidencia_resposta_execDadosEditComponent.prototype.onSubmit = function () { };
    Evidencia_resposta_execDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Evidencia_resposta_execDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'evidencia_resposta_exec-dados-edit', templateUrl: 'evidencia_resposta_exec_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Evidencia_resposta_execDadosEditComponent);
    return Evidencia_resposta_execDadosEditComponent;
}());
exports.Evidencia_resposta_execDadosEditComponent = Evidencia_resposta_execDadosEditComponent;
//# sourceMappingURL=evidencia_resposta_exec_dadosEdit.component.js.map