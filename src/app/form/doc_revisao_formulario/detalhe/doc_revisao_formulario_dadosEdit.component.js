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
var Doc_revisao_formulario_1 = require('../../../modelo/Doc_revisao_formulario');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Doc_revisao_formularioDadosEditComponent = (function () {
    function Doc_revisao_formularioDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Doc_revisao_formularioDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.doc_revisao_formulario.Doc_revisao_formulario"; var id = +params['id']; _this.doc_revisao_formulario = new Doc_revisao_formulario_1.Doc_revisao_formulario(); _this.doc_revisao_formulario.cd_doc_revisao_formulario = id; o.objetoJson = _this.doc_revisao_formulario; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Doc_revisao_formularioDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a doc_revisao_formulario. ';
    } this.doc_revisao_formulario = result; };
    Doc_revisao_formularioDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Doc_revisao_formularioDadosEditComponent.prototype.onSubmit = function () { };
    Doc_revisao_formularioDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Doc_revisao_formularioDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'doc_revisao_formulario-dados-edit', templateUrl: 'doc_revisao_formulario_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Doc_revisao_formularioDadosEditComponent);
    return Doc_revisao_formularioDadosEditComponent;
}());
exports.Doc_revisao_formularioDadosEditComponent = Doc_revisao_formularioDadosEditComponent;
//# sourceMappingURL=doc_revisao_formulario_dadosEdit.component.js.map