"use strict";
var router_1 = require('@angular/router');
var produto_compra_dados_component_1 = require('./produto_compra_dados.component');
var produto_compra_dadosDetails_component_1 = require('./produto_compra_dadosDetails.component');
var produto_compra_dadosEdit_component_1 = require('./produto_compra_dadosEdit.component');
var produto_compra_dados_routes = [{ path: '', component: produto_compra_dados_component_1.Produto_compraDadosComponent, children: [{ path: 'details', component: produto_compra_dadosDetails_component_1.Produto_compraDadosDetailsComponent }, { path: 'edit', component: produto_compra_dadosEdit_component_1.Produto_compraDadosEditComponent }] }];
exports.produto_compra_dados_routing = router_1.RouterModule.forChild(produto_compra_dados_routes);
//# sourceMappingURL=produto_compra_dados.routing.js.map