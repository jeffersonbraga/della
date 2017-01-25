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
var LoginService = (function () {
    function LoginService(http, controleApp) {
        this.http = http;
        this.controleApp = controleApp;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this._baseUrl = '';
    }
    LoginService.prototype.getUsuarioSession = function () {
        /*if (!this.usuario) {
            return this.http.get(this._baseUrl + 'customers.json')
                        .map((res: Response) => {
                            this.usuario = res.json();
                            return this.usuario;
                        })
                        .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.usuario);
        }*/
        return null;
    };
    LoginService.prototype.efetuarLogin = function (usr) {
        this.data = 'nm_usuario=' + encodeURIComponent(usr.nm_usuario) +
            '&ds_senha=' + encodeURIComponent(usr.ds_senha);
        /*return this.http.post('http://192.168.210.106:8181/api/authentication', this.data, {headers: this.headers})
                            .toPromise()
                            .then(
                            response => response.json().data as Usuario)
                            .catch(this.handleError);*/
        /*
        return this.http.get('http://192.168.210.106:8181/api/pesquisar/?ds_caminho_classe=br.com.primum.modelo.acao_corretiva.Acao_corretiva')
                    .map(this.extractData)
                    .catch(this.handleError);*/
        return this.http.post(this.controleApp.contexto_aplicacao + '/api/authentication', this.data, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.extractData = function (res) {
        if (res.status == 200) {
            return true;
        }
        return false;
    };
    LoginService.prototype.createObservable = function (data) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    LoginService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, controle_service_1.ControleService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map