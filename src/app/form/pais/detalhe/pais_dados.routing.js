"use strict";
var router_1 = require('@angular/router');
var pais_dados_component_1 = require('./pais_dados.component');
var pais_dadosDetails_component_1 = require('./pais_dadosDetails.component');
var pais_dadosEdit_component_1 = require('./pais_dadosEdit.component');
var pais_dados_routes = [{ path: '', component: pais_dados_component_1.PaisDadosComponent, children: [{ path: 'details', component: pais_dadosDetails_component_1.PaisDadosDetailsComponent }, { path: 'edit', component: pais_dadosEdit_component_1.PaisDadosEditComponent }] }];
exports.pais_dados_routing = router_1.RouterModule.forChild(pais_dados_routes);
//# sourceMappingURL=pais_dados.routing.js.map