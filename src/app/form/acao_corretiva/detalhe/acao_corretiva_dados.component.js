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
var Acao_corretivaDadosComponent = (function () {
    function Acao_corretivaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Acao_corretivaDadosDisplayModeEnum;
    }
    Acao_corretivaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Acao_corretivaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Acao_corretivaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Acao_corretivaDadosDisplayModeEnum.Edit;
            break;
    } };
    Acao_corretivaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'acao_corretiva-dados', templateUrl: 'acao_corretiva_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Acao_corretivaDadosComponent);
    return Acao_corretivaDadosComponent;
}());
exports.Acao_corretivaDadosComponent = Acao_corretivaDadosComponent;
var Acao_corretivaDadosDisplayModeEnum;
(function (Acao_corretivaDadosDisplayModeEnum) {
    Acao_corretivaDadosDisplayModeEnum[Acao_corretivaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Acao_corretivaDadosDisplayModeEnum[Acao_corretivaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Acao_corretivaDadosDisplayModeEnum[Acao_corretivaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Acao_corretivaDadosDisplayModeEnum || (Acao_corretivaDadosDisplayModeEnum = {}));
//# sourceMappingURL=acao_corretiva_dados.component.js.map