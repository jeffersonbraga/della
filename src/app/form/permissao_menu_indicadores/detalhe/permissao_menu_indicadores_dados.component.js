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
var Permissao_menu_indicadoresDadosComponent = (function () {
    function Permissao_menu_indicadoresDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Permissao_menu_indicadoresDadosDisplayModeEnum;
    }
    Permissao_menu_indicadoresDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Permissao_menu_indicadoresDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Permissao_menu_indicadoresDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Permissao_menu_indicadoresDadosDisplayModeEnum.Edit;
            break;
    } };
    Permissao_menu_indicadoresDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'permissao_menu_indicadores-dados', templateUrl: 'permissao_menu_indicadores_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Permissao_menu_indicadoresDadosComponent);
    return Permissao_menu_indicadoresDadosComponent;
}());
exports.Permissao_menu_indicadoresDadosComponent = Permissao_menu_indicadoresDadosComponent;
var Permissao_menu_indicadoresDadosDisplayModeEnum;
(function (Permissao_menu_indicadoresDadosDisplayModeEnum) {
    Permissao_menu_indicadoresDadosDisplayModeEnum[Permissao_menu_indicadoresDadosDisplayModeEnum["Details"] = 0] = "Details";
    Permissao_menu_indicadoresDadosDisplayModeEnum[Permissao_menu_indicadoresDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Permissao_menu_indicadoresDadosDisplayModeEnum[Permissao_menu_indicadoresDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Permissao_menu_indicadoresDadosDisplayModeEnum || (Permissao_menu_indicadoresDadosDisplayModeEnum = {}));
//# sourceMappingURL=permissao_menu_indicadores_dados.component.js.map