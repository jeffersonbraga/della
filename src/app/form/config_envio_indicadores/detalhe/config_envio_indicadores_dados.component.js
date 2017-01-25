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
var Config_envio_indicadoresDadosComponent = (function () {
    function Config_envio_indicadoresDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Config_envio_indicadoresDadosDisplayModeEnum;
    }
    Config_envio_indicadoresDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Config_envio_indicadoresDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Config_envio_indicadoresDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Config_envio_indicadoresDadosDisplayModeEnum.Edit;
            break;
    } };
    Config_envio_indicadoresDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'config_envio_indicadores-dados', templateUrl: 'config_envio_indicadores_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Config_envio_indicadoresDadosComponent);
    return Config_envio_indicadoresDadosComponent;
}());
exports.Config_envio_indicadoresDadosComponent = Config_envio_indicadoresDadosComponent;
var Config_envio_indicadoresDadosDisplayModeEnum;
(function (Config_envio_indicadoresDadosDisplayModeEnum) {
    Config_envio_indicadoresDadosDisplayModeEnum[Config_envio_indicadoresDadosDisplayModeEnum["Details"] = 0] = "Details";
    Config_envio_indicadoresDadosDisplayModeEnum[Config_envio_indicadoresDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Config_envio_indicadoresDadosDisplayModeEnum[Config_envio_indicadoresDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Config_envio_indicadoresDadosDisplayModeEnum || (Config_envio_indicadoresDadosDisplayModeEnum = {}));
//# sourceMappingURL=config_envio_indicadores_dados.component.js.map