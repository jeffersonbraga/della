"use strict";
var router_1 = require('@angular/router');
var permissao_acesso_dados_component_1 = require('./permissao_acesso_dados.component');
var permissao_acesso_dadosDetails_component_1 = require('./permissao_acesso_dadosDetails.component');
var permissao_acesso_dadosEdit_component_1 = require('./permissao_acesso_dadosEdit.component');
var permissao_acesso_dados_routes = [{ path: '', component: permissao_acesso_dados_component_1.Permissao_acessoDadosComponent, children: [{ path: 'details', component: permissao_acesso_dadosDetails_component_1.Permissao_acessoDadosDetailsComponent }, { path: 'edit', component: permissao_acesso_dadosEdit_component_1.Permissao_acessoDadosEditComponent }] }];
exports.permissao_acesso_dados_routing = router_1.RouterModule.forChild(permissao_acesso_dados_routes);
//# sourceMappingURL=permissao_acesso_dados.routing.js.map