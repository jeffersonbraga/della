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
var Config_impressaoDadosComponent = (function () {
    function Config_impressaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Config_impressaoDadosDisplayModeEnum;
    }
    Config_impressaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Config_impressaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Config_impressaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Config_impressaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Config_impressaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'config_impressao-dados', templateUrl: 'config_impressao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Config_impressaoDadosComponent);
    return Config_impressaoDadosComponent;
}());
exports.Config_impressaoDadosComponent = Config_impressaoDadosComponent;
var Config_impressaoDadosDisplayModeEnum;
(function (Config_impressaoDadosDisplayModeEnum) {
    Config_impressaoDadosDisplayModeEnum[Config_impressaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Config_impressaoDadosDisplayModeEnum[Config_impressaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Config_impressaoDadosDisplayModeEnum[Config_impressaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Config_impressaoDadosDisplayModeEnum || (Config_impressaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=config_impressao_dados.component.js.map