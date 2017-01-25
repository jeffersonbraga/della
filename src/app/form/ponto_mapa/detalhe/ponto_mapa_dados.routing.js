"use strict";
var router_1 = require('@angular/router');
var ponto_mapa_dados_component_1 = require('./ponto_mapa_dados.component');
var ponto_mapa_dadosDetails_component_1 = require('./ponto_mapa_dadosDetails.component');
var ponto_mapa_dadosEdit_component_1 = require('./ponto_mapa_dadosEdit.component');
var ponto_mapa_dados_routes = [{ path: '', component: ponto_mapa_dados_component_1.Ponto_mapaDadosComponent, children: [{ path: 'details', component: ponto_mapa_dadosDetails_component_1.Ponto_mapaDadosDetailsComponent }, { path: 'edit', component: ponto_mapa_dadosEdit_component_1.Ponto_mapaDadosEditComponent }] }];
exports.ponto_mapa_dados_routing = router_1.RouterModule.forChild(ponto_mapa_dados_routes);
//# sourceMappingURL=ponto_mapa_dados.routing.js.map