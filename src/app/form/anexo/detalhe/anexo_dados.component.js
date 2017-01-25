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
var AnexoDadosComponent = (function () {
    function AnexoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = AnexoDadosDisplayModeEnum;
    }
    AnexoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = AnexoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = AnexoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = AnexoDadosDisplayModeEnum.Edit;
            break;
    } };
    AnexoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'anexo-dados', templateUrl: 'anexo_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AnexoDadosComponent);
    return AnexoDadosComponent;
}());
exports.AnexoDadosComponent = AnexoDadosComponent;
var AnexoDadosDisplayModeEnum;
(function (AnexoDadosDisplayModeEnum) {
    AnexoDadosDisplayModeEnum[AnexoDadosDisplayModeEnum["Details"] = 0] = "Details";
    AnexoDadosDisplayModeEnum[AnexoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    AnexoDadosDisplayModeEnum[AnexoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(AnexoDadosDisplayModeEnum || (AnexoDadosDisplayModeEnum = {}));
//# sourceMappingURL=anexo_dados.component.js.map