"use strict";
var router_1 = require('@angular/router');
var condicao_dados_component_1 = require('./condicao_dados.component');
var condicao_dadosDetails_component_1 = require('./condicao_dadosDetails.component');
var condicao_dadosEdit_component_1 = require('./condicao_dadosEdit.component');
var condicao_dados_routes = [{ path: '', component: condicao_dados_component_1.CondicaoDadosComponent, children: [{ path: 'details', component: condicao_dadosDetails_component_1.CondicaoDadosDetailsComponent }, { path: 'edit', component: condicao_dadosEdit_component_1.CondicaoDadosEditComponent }] }];
exports.condicao_dados_routing = router_1.RouterModule.forChild(condicao_dados_routes);
//# sourceMappingURL=condicao_dados.routing.js.map