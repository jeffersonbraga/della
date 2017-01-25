"use strict";
var router_1 = require('@angular/router');
var permissao_acesso_component_1 = require('./permissao_acesso.component');
var permissao_acesso_routes = [{ path: 'permissao_acesso*', pathMatch: 'full', redirectTo: '/permissao_acesso' }, { path: 'permissao_acesso', component: permissao_acesso_component_1.Permissao_acessoComponent }];
exports.permissao_acesso_routing = router_1.RouterModule.forChild(permissao_acesso_routes);
//# sourceMappingURL=permissao_acesso.routing.js.map