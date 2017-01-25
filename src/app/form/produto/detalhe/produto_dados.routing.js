"use strict";
var router_1 = require('@angular/router');
var produto_dados_component_1 = require('./produto_dados.component');
var produto_dadosDetails_component_1 = require('./produto_dadosDetails.component');
var produto_dadosEdit_component_1 = require('./produto_dadosEdit.component');
var produto_dados_routes = [{ path: '', component: produto_dados_component_1.ProdutoDadosComponent, children: [{ path: 'details', component: produto_dadosDetails_component_1.ProdutoDadosDetailsComponent }, { path: 'edit', component: produto_dadosEdit_component_1.ProdutoDadosEditComponent }] }];
exports.produto_dados_routing = router_1.RouterModule.forChild(produto_dados_routes);
//# sourceMappingURL=produto_dados.routing.js.map