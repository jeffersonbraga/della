"use strict";
var router_1 = require('@angular/router');
var servico_dados_component_1 = require('./servico_dados.component');
var servico_dadosDetails_component_1 = require('./servico_dadosDetails.component');
var servico_dadosEdit_component_1 = require('./servico_dadosEdit.component');
var servico_dados_routes = [{ path: '', component: servico_dados_component_1.ServicoDadosComponent, children: [{ path: 'details', component: servico_dadosDetails_component_1.ServicoDadosDetailsComponent }, { path: 'edit', component: servico_dadosEdit_component_1.ServicoDadosEditComponent }] }];
exports.servico_dados_routing = router_1.RouterModule.forChild(servico_dados_routes);
//# sourceMappingURL=servico_dados.routing.js.map