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
var Avaliacao_reuniao_1 = require('../../../modelo/Avaliacao_reuniao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Avaliacao_reuniaoDadosEditComponent = (function () {
    function Avaliacao_reuniaoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Avaliacao_reuniaoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.avaliacao_reuniao.Avaliacao_reuniao"; var id = +params['id']; _this.avaliacao_reuniao = new Avaliacao_reuniao_1.Avaliacao_reuniao(); _this.avaliacao_reuniao.cd_avaliacao_reuniao = id; o.objetoJson = _this.avaliacao_reuniao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Avaliacao_reuniaoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a avaliacao_reuniao. ';
    } this.avaliacao_reuniao = result; };
    Avaliacao_reuniaoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Avaliacao_reuniaoDadosEditComponent.prototype.onSubmit = function () { };
    Avaliacao_reuniaoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Avaliacao_reuniaoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'avaliacao_reuniao-dados-edit', templateUrl: 'avaliacao_reuniao_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Avaliacao_reuniaoDadosEditComponent);
    return Avaliacao_reuniaoDadosEditComponent;
}());
exports.Avaliacao_reuniaoDadosEditComponent = Avaliacao_reuniaoDadosEditComponent;
//# sourceMappingURL=avaliacao_reuniao_dadosEdit.component.js.map