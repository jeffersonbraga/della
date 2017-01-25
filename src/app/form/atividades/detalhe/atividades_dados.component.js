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
var AtividadesDadosComponent = (function () {
    function AtividadesDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = AtividadesDadosDisplayModeEnum;
    }
    AtividadesDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = AtividadesDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = AtividadesDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = AtividadesDadosDisplayModeEnum.Edit;
            break;
    } };
    AtividadesDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atividades-dados', templateUrl: 'atividades_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AtividadesDadosComponent);
    return AtividadesDadosComponent;
}());
exports.AtividadesDadosComponent = AtividadesDadosComponent;
var AtividadesDadosDisplayModeEnum;
(function (AtividadesDadosDisplayModeEnum) {
    AtividadesDadosDisplayModeEnum[AtividadesDadosDisplayModeEnum["Details"] = 0] = "Details";
    AtividadesDadosDisplayModeEnum[AtividadesDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    AtividadesDadosDisplayModeEnum[AtividadesDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(AtividadesDadosDisplayModeEnum || (AtividadesDadosDisplayModeEnum = {}));
//# sourceMappingURL=atividades_dados.component.js.map