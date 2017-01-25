"use strict";
var router_1 = require('@angular/router');
var permissao_acesso_documento_component_1 = require('./permissao_acesso_documento.component');
var permissao_acesso_documento_routes = [{ path: 'permissao_acesso_documento*', pathMatch: 'full', redirectTo: '/permissao_acesso_documento' }, { path: 'permissao_acesso_documento', component: permissao_acesso_documento_component_1.Permissao_acesso_documentoComponent }];
exports.permissao_acesso_documento_routing = router_1.RouterModule.forChild(permissao_acesso_documento_routes);
//# sourceMappingURL=permissao_acesso_documento.routing.js.map