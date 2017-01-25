"use strict";
var router_1 = require('@angular/router');
var permissao_padrao_dados_component_1 = require('./permissao_padrao_dados.component');
var permissao_padrao_dadosDetails_component_1 = require('./permissao_padrao_dadosDetails.component');
var permissao_padrao_dadosEdit_component_1 = require('./permissao_padrao_dadosEdit.component');
var permissao_padrao_dados_routes = [{ path: '', component: permissao_padrao_dados_component_1.Permissao_padraoDadosComponent, children: [{ path: 'details', component: permissao_padrao_dadosDetails_component_1.Permissao_padraoDadosDetailsComponent }, { path: 'edit', component: permissao_padrao_dadosEdit_component_1.Permissao_padraoDadosEditComponent }] }];
exports.permissao_padrao_dados_routing = router_1.RouterModule.forChild(permissao_padrao_dados_routes);
//# sourceMappingURL=permissao_padrao_dados.routing.js.map