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
var Fiscal_sifDadosComponent = (function () {
    function Fiscal_sifDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Fiscal_sifDadosDisplayModeEnum;
    }
    Fiscal_sifDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Fiscal_sifDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Fiscal_sifDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Fiscal_sifDadosDisplayModeEnum.Edit;
            break;
    } };
    Fiscal_sifDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'fiscal_sif-dados', templateUrl: 'fiscal_sif_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Fiscal_sifDadosComponent);
    return Fiscal_sifDadosComponent;
}());
exports.Fiscal_sifDadosComponent = Fiscal_sifDadosComponent;
var Fiscal_sifDadosDisplayModeEnum;
(function (Fiscal_sifDadosDisplayModeEnum) {
    Fiscal_sifDadosDisplayModeEnum[Fiscal_sifDadosDisplayModeEnum["Details"] = 0] = "Details";
    Fiscal_sifDadosDisplayModeEnum[Fiscal_sifDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Fiscal_sifDadosDisplayModeEnum[Fiscal_sifDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Fiscal_sifDadosDisplayModeEnum || (Fiscal_sifDadosDisplayModeEnum = {}));
//# sourceMappingURL=fiscal_sif_dados.component.js.map