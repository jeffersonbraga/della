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
var Config_sistemaDadosComponent = (function () {
    function Config_sistemaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Config_sistemaDadosDisplayModeEnum;
    }
    Config_sistemaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Config_sistemaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Config_sistemaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Config_sistemaDadosDisplayModeEnum.Edit;
            break;
    } };
    Config_sistemaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'config_sistema-dados', templateUrl: 'config_sistema_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Config_sistemaDadosComponent);
    return Config_sistemaDadosComponent;
}());
exports.Config_sistemaDadosComponent = Config_sistemaDadosComponent;
var Config_sistemaDadosDisplayModeEnum;
(function (Config_sistemaDadosDisplayModeEnum) {
    Config_sistemaDadosDisplayModeEnum[Config_sistemaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Config_sistemaDadosDisplayModeEnum[Config_sistemaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Config_sistemaDadosDisplayModeEnum[Config_sistemaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Config_sistemaDadosDisplayModeEnum || (Config_sistemaDadosDisplayModeEnum = {}));
//# sourceMappingURL=config_sistema_dados.component.js.map