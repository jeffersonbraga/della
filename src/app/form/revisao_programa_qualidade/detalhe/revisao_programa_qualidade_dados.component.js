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
var Revisao_programa_qualidadeDadosComponent = (function () {
    function Revisao_programa_qualidadeDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Revisao_programa_qualidadeDadosDisplayModeEnum;
    }
    Revisao_programa_qualidadeDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Revisao_programa_qualidadeDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Revisao_programa_qualidadeDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Revisao_programa_qualidadeDadosDisplayModeEnum.Edit;
            break;
    } };
    Revisao_programa_qualidadeDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'revisao_programa_qualidade-dados', templateUrl: 'revisao_programa_qualidade_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Revisao_programa_qualidadeDadosComponent);
    return Revisao_programa_qualidadeDadosComponent;
}());
exports.Revisao_programa_qualidadeDadosComponent = Revisao_programa_qualidadeDadosComponent;
var Revisao_programa_qualidadeDadosDisplayModeEnum;
(function (Revisao_programa_qualidadeDadosDisplayModeEnum) {
    Revisao_programa_qualidadeDadosDisplayModeEnum[Revisao_programa_qualidadeDadosDisplayModeEnum["Details"] = 0] = "Details";
    Revisao_programa_qualidadeDadosDisplayModeEnum[Revisao_programa_qualidadeDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Revisao_programa_qualidadeDadosDisplayModeEnum[Revisao_programa_qualidadeDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Revisao_programa_qualidadeDadosDisplayModeEnum || (Revisao_programa_qualidadeDadosDisplayModeEnum = {}));
//# sourceMappingURL=revisao_programa_qualidade_dados.component.js.map