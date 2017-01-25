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
var Campo_formularioDadosComponent = (function () {
    function Campo_formularioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Campo_formularioDadosDisplayModeEnum;
    }
    Campo_formularioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Campo_formularioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Campo_formularioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Campo_formularioDadosDisplayModeEnum.Edit;
            break;
    } };
    Campo_formularioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'campo_formulario-dados', templateUrl: 'campo_formulario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Campo_formularioDadosComponent);
    return Campo_formularioDadosComponent;
}());
exports.Campo_formularioDadosComponent = Campo_formularioDadosComponent;
var Campo_formularioDadosDisplayModeEnum;
(function (Campo_formularioDadosDisplayModeEnum) {
    Campo_formularioDadosDisplayModeEnum[Campo_formularioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Campo_formularioDadosDisplayModeEnum[Campo_formularioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Campo_formularioDadosDisplayModeEnum[Campo_formularioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Campo_formularioDadosDisplayModeEnum || (Campo_formularioDadosDisplayModeEnum = {}));
//# sourceMappingURL=campo_formulario_dados.component.js.map