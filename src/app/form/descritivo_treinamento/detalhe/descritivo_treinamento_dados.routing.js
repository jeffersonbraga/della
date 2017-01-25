"use strict";
var router_1 = require('@angular/router');
var descritivo_treinamento_dados_component_1 = require('./descritivo_treinamento_dados.component');
var descritivo_treinamento_dadosDetails_component_1 = require('./descritivo_treinamento_dadosDetails.component');
var descritivo_treinamento_dadosEdit_component_1 = require('./descritivo_treinamento_dadosEdit.component');
var descritivo_treinamento_dados_routes = [{ path: '', component: descritivo_treinamento_dados_component_1.Descritivo_treinamentoDadosComponent, children: [{ path: 'details', component: descritivo_treinamento_dadosDetails_component_1.Descritivo_treinamentoDadosDetailsComponent }, { path: 'edit', component: descritivo_treinamento_dadosEdit_component_1.Descritivo_treinamentoDadosEditComponent }] }];
exports.descritivo_treinamento_dados_routing = router_1.RouterModule.forChild(descritivo_treinamento_dados_routes);
//# sourceMappingURL=descritivo_treinamento_dados.routing.js.map