"use strict";
var router_1 = require('@angular/router');
var permissao_acesso_documento_dados_component_1 = require('./permissao_acesso_documento_dados.component');
var permissao_acesso_documento_dadosDetails_component_1 = require('./permissao_acesso_documento_dadosDetails.component');
var permissao_acesso_documento_dadosEdit_component_1 = require('./permissao_acesso_documento_dadosEdit.component');
var permissao_acesso_documento_dados_routes = [{ path: '', component: permissao_acesso_documento_dados_component_1.Permissao_acesso_documentoDadosComponent, children: [{ path: 'details', component: permissao_acesso_documento_dadosDetails_component_1.Permissao_acesso_documentoDadosDetailsComponent }, { path: 'edit', component: permissao_acesso_documento_dadosEdit_component_1.Permissao_acesso_documentoDadosEditComponent }] }];
exports.permissao_acesso_documento_dados_routing = router_1.RouterModule.forChild(permissao_acesso_documento_dados_routes);
//# sourceMappingURL=permissao_acesso_documento_dados.routing.js.map