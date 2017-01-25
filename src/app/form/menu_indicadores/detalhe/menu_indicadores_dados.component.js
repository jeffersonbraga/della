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
var Menu_indicadoresDadosComponent = (function () {
    function Menu_indicadoresDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Menu_indicadoresDadosDisplayModeEnum;
    }
    Menu_indicadoresDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Menu_indicadoresDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Menu_indicadoresDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Menu_indicadoresDadosDisplayModeEnum.Edit;
            break;
    } };
    Menu_indicadoresDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'menu_indicadores-dados', templateUrl: 'menu_indicadores_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Menu_indicadoresDadosComponent);
    return Menu_indicadoresDadosComponent;
}());
exports.Menu_indicadoresDadosComponent = Menu_indicadoresDadosComponent;
var Menu_indicadoresDadosDisplayModeEnum;
(function (Menu_indicadoresDadosDisplayModeEnum) {
    Menu_indicadoresDadosDisplayModeEnum[Menu_indicadoresDadosDisplayModeEnum["Details"] = 0] = "Details";
    Menu_indicadoresDadosDisplayModeEnum[Menu_indicadoresDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Menu_indicadoresDadosDisplayModeEnum[Menu_indicadoresDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Menu_indicadoresDadosDisplayModeEnum || (Menu_indicadoresDadosDisplayModeEnum = {}));
//# sourceMappingURL=menu_indicadores_dados.component.js.map