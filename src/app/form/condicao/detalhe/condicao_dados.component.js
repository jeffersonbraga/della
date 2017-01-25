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
var CondicaoDadosComponent = (function () {
    function CondicaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = CondicaoDadosDisplayModeEnum;
    }
    CondicaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = CondicaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = CondicaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = CondicaoDadosDisplayModeEnum.Edit;
            break;
    } };
    CondicaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'condicao-dados', templateUrl: 'condicao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CondicaoDadosComponent);
    return CondicaoDadosComponent;
}());
exports.CondicaoDadosComponent = CondicaoDadosComponent;
var CondicaoDadosDisplayModeEnum;
(function (CondicaoDadosDisplayModeEnum) {
    CondicaoDadosDisplayModeEnum[CondicaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    CondicaoDadosDisplayModeEnum[CondicaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    CondicaoDadosDisplayModeEnum[CondicaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(CondicaoDadosDisplayModeEnum || (CondicaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=condicao_dados.component.js.map