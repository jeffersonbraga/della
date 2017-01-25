"use strict";
var router_1 = require('@angular/router');
var endereco_dados_component_1 = require('./endereco_dados.component');
var endereco_dadosDetails_component_1 = require('./endereco_dadosDetails.component');
var endereco_dadosEdit_component_1 = require('./endereco_dadosEdit.component');
var endereco_dados_routes = [{ path: '', component: endereco_dados_component_1.EnderecoDadosComponent, children: [{ path: 'details', component: endereco_dadosDetails_component_1.EnderecoDadosDetailsComponent }, { path: 'edit', component: endereco_dadosEdit_component_1.EnderecoDadosEditComponent }] }];
exports.endereco_dados_routing = router_1.RouterModule.forChild(endereco_dados_routes);
//# sourceMappingURL=endereco_dados.routing.js.map