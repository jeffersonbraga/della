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
var Processo_fluxoDadosComponent = (function () {
    function Processo_fluxoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Processo_fluxoDadosDisplayModeEnum;
    }
    Processo_fluxoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Processo_fluxoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Processo_fluxoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Processo_fluxoDadosDisplayModeEnum.Edit;
            break;
    } };
    Processo_fluxoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'processo_fluxo-dados', templateUrl: 'processo_fluxo_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Processo_fluxoDadosComponent);
    return Processo_fluxoDadosComponent;
}());
exports.Processo_fluxoDadosComponent = Processo_fluxoDadosComponent;
var Processo_fluxoDadosDisplayModeEnum;
(function (Processo_fluxoDadosDisplayModeEnum) {
    Processo_fluxoDadosDisplayModeEnum[Processo_fluxoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Processo_fluxoDadosDisplayModeEnum[Processo_fluxoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Processo_fluxoDadosDisplayModeEnum[Processo_fluxoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Processo_fluxoDadosDisplayModeEnum || (Processo_fluxoDadosDisplayModeEnum = {}));
//# sourceMappingURL=processo_fluxo_dados.component.js.map