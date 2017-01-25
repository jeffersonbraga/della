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
var Permissao_indicadorDadosComponent = (function () {
    function Permissao_indicadorDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Permissao_indicadorDadosDisplayModeEnum;
    }
    Permissao_indicadorDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Permissao_indicadorDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Permissao_indicadorDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Permissao_indicadorDadosDisplayModeEnum.Edit;
            break;
    } };
    Permissao_indicadorDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'permissao_indicador-dados', templateUrl: 'permissao_indicador_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Permissao_indicadorDadosComponent);
    return Permissao_indicadorDadosComponent;
}());
exports.Permissao_indicadorDadosComponent = Permissao_indicadorDadosComponent;
var Permissao_indicadorDadosDisplayModeEnum;
(function (Permissao_indicadorDadosDisplayModeEnum) {
    Permissao_indicadorDadosDisplayModeEnum[Permissao_indicadorDadosDisplayModeEnum["Details"] = 0] = "Details";
    Permissao_indicadorDadosDisplayModeEnum[Permissao_indicadorDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Permissao_indicadorDadosDisplayModeEnum[Permissao_indicadorDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Permissao_indicadorDadosDisplayModeEnum || (Permissao_indicadorDadosDisplayModeEnum = {}));
//# sourceMappingURL=permissao_indicador_dados.component.js.map