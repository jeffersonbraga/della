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
var Pre_avaliacao_ideia_pic_1 = require('../../../modelo/Pre_avaliacao_ideia_pic');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Pre_avaliacao_ideia_picDadosEditComponent = (function () {
    function Pre_avaliacao_ideia_picDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Pre_avaliacao_ideia_picDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.pre_avaliacao_ideia_pic.Pre_avaliacao_ideia_pic"; var id = +params['id']; _this.pre_avaliacao_ideia_pic = new Pre_avaliacao_ideia_pic_1.Pre_avaliacao_ideia_pic(); _this.pre_avaliacao_ideia_pic.cd_pre_avaliacao_ideia_pic = id; o.objetoJson = _this.pre_avaliacao_ideia_pic; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Pre_avaliacao_ideia_picDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a pre_avaliacao_ideia_pic. ';
    } this.pre_avaliacao_ideia_pic = result; };
    Pre_avaliacao_ideia_picDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Pre_avaliacao_ideia_picDadosEditComponent.prototype.onSubmit = function () { };
    Pre_avaliacao_ideia_picDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Pre_avaliacao_ideia_picDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'pre_avaliacao_ideia_pic-dados-edit', templateUrl: 'pre_avaliacao_ideia_pic_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Pre_avaliacao_ideia_picDadosEditComponent);
    return Pre_avaliacao_ideia_picDadosEditComponent;
}());
exports.Pre_avaliacao_ideia_picDadosEditComponent = Pre_avaliacao_ideia_picDadosEditComponent;
//# sourceMappingURL=pre_avaliacao_ideia_pic_dadosEdit.component.js.map