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
var EnderecoDadosComponent = (function () {
    function EnderecoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = EnderecoDadosDisplayModeEnum;
    }
    EnderecoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = EnderecoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = EnderecoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = EnderecoDadosDisplayModeEnum.Edit;
            break;
    } };
    EnderecoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'endereco-dados', templateUrl: 'endereco_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], EnderecoDadosComponent);
    return EnderecoDadosComponent;
}());
exports.EnderecoDadosComponent = EnderecoDadosComponent;
var EnderecoDadosDisplayModeEnum;
(function (EnderecoDadosDisplayModeEnum) {
    EnderecoDadosDisplayModeEnum[EnderecoDadosDisplayModeEnum["Details"] = 0] = "Details";
    EnderecoDadosDisplayModeEnum[EnderecoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    EnderecoDadosDisplayModeEnum[EnderecoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(EnderecoDadosDisplayModeEnum || (EnderecoDadosDisplayModeEnum = {}));
//# sourceMappingURL=endereco_dados.component.js.map