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
var Config_indicadoresDadosComponent = (function () {
    function Config_indicadoresDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Config_indicadoresDadosDisplayModeEnum;
    }
    Config_indicadoresDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Config_indicadoresDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Config_indicadoresDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Config_indicadoresDadosDisplayModeEnum.Edit;
            break;
    } };
    Config_indicadoresDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'config_indicadores-dados', templateUrl: 'config_indicadores_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Config_indicadoresDadosComponent);
    return Config_indicadoresDadosComponent;
}());
exports.Config_indicadoresDadosComponent = Config_indicadoresDadosComponent;
var Config_indicadoresDadosDisplayModeEnum;
(function (Config_indicadoresDadosDisplayModeEnum) {
    Config_indicadoresDadosDisplayModeEnum[Config_indicadoresDadosDisplayModeEnum["Details"] = 0] = "Details";
    Config_indicadoresDadosDisplayModeEnum[Config_indicadoresDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Config_indicadoresDadosDisplayModeEnum[Config_indicadoresDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Config_indicadoresDadosDisplayModeEnum || (Config_indicadoresDadosDisplayModeEnum = {}));
//# sourceMappingURL=config_indicadores_dados.component.js.map