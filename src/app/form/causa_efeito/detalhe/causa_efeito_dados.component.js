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
var Causa_efeitoDadosComponent = (function () {
    function Causa_efeitoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Causa_efeitoDadosDisplayModeEnum;
    }
    Causa_efeitoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Causa_efeitoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Causa_efeitoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Causa_efeitoDadosDisplayModeEnum.Edit;
            break;
    } };
    Causa_efeitoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'causa_efeito-dados', templateUrl: 'causa_efeito_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Causa_efeitoDadosComponent);
    return Causa_efeitoDadosComponent;
}());
exports.Causa_efeitoDadosComponent = Causa_efeitoDadosComponent;
var Causa_efeitoDadosDisplayModeEnum;
(function (Causa_efeitoDadosDisplayModeEnum) {
    Causa_efeitoDadosDisplayModeEnum[Causa_efeitoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Causa_efeitoDadosDisplayModeEnum[Causa_efeitoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Causa_efeitoDadosDisplayModeEnum[Causa_efeitoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Causa_efeitoDadosDisplayModeEnum || (Causa_efeitoDadosDisplayModeEnum = {}));
//# sourceMappingURL=causa_efeito_dados.component.js.map