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
var Config_campo_pesquisaDadosComponent = (function () {
    function Config_campo_pesquisaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Config_campo_pesquisaDadosDisplayModeEnum;
    }
    Config_campo_pesquisaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Config_campo_pesquisaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Config_campo_pesquisaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Config_campo_pesquisaDadosDisplayModeEnum.Edit;
            break;
    } };
    Config_campo_pesquisaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'config_campo_pesquisa-dados', templateUrl: 'config_campo_pesquisa_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Config_campo_pesquisaDadosComponent);
    return Config_campo_pesquisaDadosComponent;
}());
exports.Config_campo_pesquisaDadosComponent = Config_campo_pesquisaDadosComponent;
var Config_campo_pesquisaDadosDisplayModeEnum;
(function (Config_campo_pesquisaDadosDisplayModeEnum) {
    Config_campo_pesquisaDadosDisplayModeEnum[Config_campo_pesquisaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Config_campo_pesquisaDadosDisplayModeEnum[Config_campo_pesquisaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Config_campo_pesquisaDadosDisplayModeEnum[Config_campo_pesquisaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Config_campo_pesquisaDadosDisplayModeEnum || (Config_campo_pesquisaDadosDisplayModeEnum = {}));
//# sourceMappingURL=config_campo_pesquisa_dados.component.js.map