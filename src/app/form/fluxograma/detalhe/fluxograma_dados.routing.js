"use strict";
var router_1 = require('@angular/router');
var fluxograma_dados_component_1 = require('./fluxograma_dados.component');
var fluxograma_dadosDetails_component_1 = require('./fluxograma_dadosDetails.component');
var fluxograma_dadosEdit_component_1 = require('./fluxograma_dadosEdit.component');
var fluxograma_dados_routes = [{ path: '', component: fluxograma_dados_component_1.FluxogramaDadosComponent, children: [{ path: 'details', component: fluxograma_dadosDetails_component_1.FluxogramaDadosDetailsComponent }, { path: 'edit', component: fluxograma_dadosEdit_component_1.FluxogramaDadosEditComponent }] }];
exports.fluxograma_dados_routing = router_1.RouterModule.forChild(fluxograma_dados_routes);
//# sourceMappingURL=fluxograma_dados.routing.js.map