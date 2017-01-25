"use strict";
var router_1 = require('@angular/router');
var veiculo_dados_component_1 = require('./veiculo_dados.component');
var veiculo_dadosDetails_component_1 = require('./veiculo_dadosDetails.component');
var veiculo_dadosEdit_component_1 = require('./veiculo_dadosEdit.component');
var veiculo_dados_routes = [{ path: '', component: veiculo_dados_component_1.VeiculoDadosComponent, children: [{ path: 'details', component: veiculo_dadosDetails_component_1.VeiculoDadosDetailsComponent }, { path: 'edit', component: veiculo_dadosEdit_component_1.VeiculoDadosEditComponent }] }];
exports.veiculo_dados_routing = router_1.RouterModule.forChild(veiculo_dados_routes);
//# sourceMappingURL=veiculo_dados.routing.js.map