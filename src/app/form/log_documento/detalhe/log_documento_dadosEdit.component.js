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
var Log_documento_1 = require('../../../modelo/Log_documento');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Log_documentoDadosEditComponent = (function () {
    function Log_documentoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Log_documentoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.log_documento.Log_documento"; var id = +params['id']; _this.log_documento = new Log_documento_1.Log_documento(); _this.log_documento.cd_log_documento = id; o.objetoJson = _this.log_documento; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Log_documentoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a log_documento. ';
    } this.log_documento = result; };
    Log_documentoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Log_documentoDadosEditComponent.prototype.onSubmit = function () { };
    Log_documentoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Log_documentoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'log_documento-dados-edit', templateUrl: 'log_documento_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Log_documentoDadosEditComponent);
    return Log_documentoDadosEditComponent;
}());
exports.Log_documentoDadosEditComponent = Log_documentoDadosEditComponent;
//# sourceMappingURL=log_documento_dadosEdit.component.js.map