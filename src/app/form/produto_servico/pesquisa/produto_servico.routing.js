"use strict";
var router_1 = require('@angular/router');
var produto_servico_component_1 = require('./produto_servico.component');
var produto_servico_routes = [{ path: 'produto_servico*', pathMatch: 'full', redirectTo: '/produto_servico' }, { path: 'produto_servico', component: produto_servico_component_1.Produto_servicoComponent }];
exports.produto_servico_routing = router_1.RouterModule.forChild(produto_servico_routes);
//# sourceMappingURL=produto_servico.routing.js.map