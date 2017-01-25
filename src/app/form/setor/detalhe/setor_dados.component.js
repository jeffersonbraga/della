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
var SetorDadosComponent = (function () {
    function SetorDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = SetorDadosDisplayModeEnum;
    }
    SetorDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = SetorDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = SetorDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = SetorDadosDisplayModeEnum.Edit;
            break;
    } };
    SetorDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'setor-dados', templateUrl: 'setor_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SetorDadosComponent);
    return SetorDadosComponent;
}());
exports.SetorDadosComponent = SetorDadosComponent;
var SetorDadosDisplayModeEnum;
(function (SetorDadosDisplayModeEnum) {
    SetorDadosDisplayModeEnum[SetorDadosDisplayModeEnum["Details"] = 0] = "Details";
    SetorDadosDisplayModeEnum[SetorDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    SetorDadosDisplayModeEnum[SetorDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(SetorDadosDisplayModeEnum || (SetorDadosDisplayModeEnum = {}));
//# sourceMappingURL=setor_dados.component.js.map