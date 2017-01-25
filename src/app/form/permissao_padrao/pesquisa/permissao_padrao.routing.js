"use strict";
var router_1 = require('@angular/router');
var permissao_padrao_component_1 = require('./permissao_padrao.component');
var permissao_padrao_routes = [{ path: 'permissao_padrao*', pathMatch: 'full', redirectTo: '/permissao_padrao' }, { path: 'permissao_padrao', component: permissao_padrao_component_1.Permissao_padraoComponent }];
exports.permissao_padrao_routing = router_1.RouterModule.forChild(permissao_padrao_routes);
//# sourceMappingURL=permissao_padrao.routing.js.map