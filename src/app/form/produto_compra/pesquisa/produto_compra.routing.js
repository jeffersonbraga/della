"use strict";
var router_1 = require('@angular/router');
var produto_compra_component_1 = require('./produto_compra.component');
var produto_compra_routes = [{ path: 'produto_compra*', pathMatch: 'full', redirectTo: '/produto_compra' }, { path: 'produto_compra', component: produto_compra_component_1.Produto_compraComponent }];
exports.produto_compra_routing = router_1.RouterModule.forChild(produto_compra_routes);
//# sourceMappingURL=produto_compra.routing.js.map