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
var http_1 = require('@angular/http');
//Grab everything with import 'rxjs/Rx';
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var controle_service_1 = require('../controle/controle.service');
var PesquisaService = (function () {
    function PesquisaService(http, controleApp) {
        this.http = http;
        this.controleApp = controleApp;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this._baseUrl = '';
    }
    PesquisaService.prototype.efetuarPesquisa = function (obj) {
        return this.http.post(this.controleApp.contexto_aplicacao + '/api/pesquisaPadrao', obj, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PesquisaService.prototype.extractData = function (res) {
        if (res.status == 200) {
            return res.json();
        }
        return false;
    };
    PesquisaService.prototype.createObservable = function (data) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    PesquisaService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'LSD Server error');
    };
    PesquisaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, controle_service_1.ControleService])
    ], PesquisaService);
    return PesquisaService;
}());
exports.PesquisaService = PesquisaService;
//# sourceMappingURL=pesquisa.service.js.map