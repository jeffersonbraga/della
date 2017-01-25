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
var Exame_medicoDadosComponent = (function () {
    function Exame_medicoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Exame_medicoDadosDisplayModeEnum;
    }
    Exame_medicoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Exame_medicoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Exame_medicoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Exame_medicoDadosDisplayModeEnum.Edit;
            break;
    } };
    Exame_medicoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'exame_medico-dados', templateUrl: 'exame_medico_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Exame_medicoDadosComponent);
    return Exame_medicoDadosComponent;
}());
exports.Exame_medicoDadosComponent = Exame_medicoDadosComponent;
var Exame_medicoDadosDisplayModeEnum;
(function (Exame_medicoDadosDisplayModeEnum) {
    Exame_medicoDadosDisplayModeEnum[Exame_medicoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Exame_medicoDadosDisplayModeEnum[Exame_medicoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Exame_medicoDadosDisplayModeEnum[Exame_medicoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Exame_medicoDadosDisplayModeEnum || (Exame_medicoDadosDisplayModeEnum = {}));
//# sourceMappingURL=exame_medico_dados.component.js.map