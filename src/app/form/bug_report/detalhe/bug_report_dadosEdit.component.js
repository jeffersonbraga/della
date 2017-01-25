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
var Bug_report_1 = require('../../../modelo/Bug_report');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Bug_reportDadosEditComponent = (function () {
    function Bug_reportDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Bug_reportDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.bug_report.Bug_report"; var id = +params['id']; _this.bug_report = new Bug_report_1.Bug_report(); _this.bug_report.cd_bug_report = id; o.objetoJson = _this.bug_report; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Bug_reportDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a bug_report. ';
    } this.bug_report = result; };
    Bug_reportDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Bug_reportDadosEditComponent.prototype.onSubmit = function () { };
    Bug_reportDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Bug_reportDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'bug_report-dados-edit', templateUrl: 'bug_report_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Bug_reportDadosEditComponent);
    return Bug_reportDadosEditComponent;
}());
exports.Bug_reportDadosEditComponent = Bug_reportDadosEditComponent;
//# sourceMappingURL=bug_report_dadosEdit.component.js.map