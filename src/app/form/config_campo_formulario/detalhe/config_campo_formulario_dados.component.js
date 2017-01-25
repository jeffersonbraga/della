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
var Config_campo_formularioDadosComponent = (function () {
    function Config_campo_formularioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Config_campo_formularioDadosDisplayModeEnum;
    }
    Config_campo_formularioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Config_campo_formularioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Config_campo_formularioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Config_campo_formularioDadosDisplayModeEnum.Edit;
            break;
    } };
    Config_campo_formularioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'config_campo_formulario-dados', templateUrl: 'config_campo_formulario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Config_campo_formularioDadosComponent);
    return Config_campo_formularioDadosComponent;
}());
exports.Config_campo_formularioDadosComponent = Config_campo_formularioDadosComponent;
var Config_campo_formularioDadosDisplayModeEnum;
(function (Config_campo_formularioDadosDisplayModeEnum) {
    Config_campo_formularioDadosDisplayModeEnum[Config_campo_formularioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Config_campo_formularioDadosDisplayModeEnum[Config_campo_formularioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Config_campo_formularioDadosDisplayModeEnum[Config_campo_formularioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Config_campo_formularioDadosDisplayModeEnum || (Config_campo_formularioDadosDisplayModeEnum = {}));
//# sourceMappingURL=config_campo_formulario_dados.component.js.map