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
var Pergunta_avaliacao_ideiaDadosComponent = (function () {
    function Pergunta_avaliacao_ideiaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Pergunta_avaliacao_ideiaDadosDisplayModeEnum;
    }
    Pergunta_avaliacao_ideiaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Pergunta_avaliacao_ideiaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Pergunta_avaliacao_ideiaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Pergunta_avaliacao_ideiaDadosDisplayModeEnum.Edit;
            break;
    } };
    Pergunta_avaliacao_ideiaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'pergunta_avaliacao_ideia-dados', templateUrl: 'pergunta_avaliacao_ideia_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Pergunta_avaliacao_ideiaDadosComponent);
    return Pergunta_avaliacao_ideiaDadosComponent;
}());
exports.Pergunta_avaliacao_ideiaDadosComponent = Pergunta_avaliacao_ideiaDadosComponent;
var Pergunta_avaliacao_ideiaDadosDisplayModeEnum;
(function (Pergunta_avaliacao_ideiaDadosDisplayModeEnum) {
    Pergunta_avaliacao_ideiaDadosDisplayModeEnum[Pergunta_avaliacao_ideiaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Pergunta_avaliacao_ideiaDadosDisplayModeEnum[Pergunta_avaliacao_ideiaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Pergunta_avaliacao_ideiaDadosDisplayModeEnum[Pergunta_avaliacao_ideiaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Pergunta_avaliacao_ideiaDadosDisplayModeEnum || (Pergunta_avaliacao_ideiaDadosDisplayModeEnum = {}));
//# sourceMappingURL=pergunta_avaliacao_ideia_dados.component.js.map