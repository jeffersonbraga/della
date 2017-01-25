"use strict";
var router_1 = require('@angular/router');
var produto_component_1 = require('./produto.component');
var produto_routes = [{ path: 'produto*', pathMatch: 'full', redirectTo: '/produto' }, { path: 'produto', component: produto_component_1.ProdutoComponent }];
exports.produto_routing = router_1.RouterModule.forChild(produto_routes);
//# sourceMappingURL=produto.routing.js.map