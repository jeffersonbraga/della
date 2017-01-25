"use strict";
var router_1 = require('@angular/router');
var processo_fluxo_dados_component_1 = require('./processo_fluxo_dados.component');
var processo_fluxo_dadosDetails_component_1 = require('./processo_fluxo_dadosDetails.component');
var processo_fluxo_dadosEdit_component_1 = require('./processo_fluxo_dadosEdit.component');
var processo_fluxo_dados_routes = [{ path: '', component: processo_fluxo_dados_component_1.Processo_fluxoDadosComponent, children: [{ path: 'details', component: processo_fluxo_dadosDetails_component_1.Processo_fluxoDadosDetailsComponent }, { path: 'edit', component: processo_fluxo_dadosEdit_component_1.Processo_fluxoDadosEditComponent }] }];
exports.processo_fluxo_dados_routing = router_1.RouterModule.forChild(processo_fluxo_dados_routes);
//# sourceMappingURL=processo_fluxo_dados.routing.js.map