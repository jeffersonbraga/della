"use strict";
var router_1 = require('@angular/router');
var produto_servico_dados_component_1 = require('./produto_servico_dados.component');
var produto_servico_dadosDetails_component_1 = require('./produto_servico_dadosDetails.component');
var produto_servico_dadosEdit_component_1 = require('./produto_servico_dadosEdit.component');
var produto_servico_dados_routes = [{ path: '', component: produto_servico_dados_component_1.Produto_servicoDadosComponent, children: [{ path: 'details', component: produto_servico_dadosDetails_component_1.Produto_servicoDadosDetailsComponent }, { path: 'edit', component: produto_servico_dadosEdit_component_1.Produto_servicoDadosEditComponent }] }];
exports.produto_servico_dados_routing = router_1.RouterModule.forChild(produto_servico_dados_routes);
//# sourceMappingURL=produto_servico_dados.routing.js.map