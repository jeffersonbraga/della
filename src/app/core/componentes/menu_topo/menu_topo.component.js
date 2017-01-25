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
var controle_service_1 = require('../../services/controle/controle.service');
var Menu_topoComponent = (function () {
    function Menu_topoComponent(controleApp) {
        this.controleApp = controleApp;
        this.controleApp.setMenu_topo(this);
        this.menu_visivel = false;
    }
    Menu_topoComponent.prototype.ngOnInit = function () {
        if (this.controleApp.getUsuario() != null) {
            this.menu_visivel = true;
        }
    };
    Menu_topoComponent.prototype.alterarStatusMenu = function (vl) {
        this.menu_visivel = vl;
    };
    Menu_topoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'menu-topo',
            templateUrl: 'menu_topo.component.html'
        }), 
        __metadata('design:paramtypes', [controle_service_1.ControleService])
    ], Menu_topoComponent);
    return Menu_topoComponent;
}());
exports.Menu_topoComponent = Menu_topoComponent;
//# sourceMappingURL=menu_topo.component.js.map