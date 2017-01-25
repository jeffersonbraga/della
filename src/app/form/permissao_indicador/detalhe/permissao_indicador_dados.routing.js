"use strict";
var router_1 = require('@angular/router');
var permissao_indicador_dados_component_1 = require('./permissao_indicador_dados.component');
var permissao_indicador_dadosDetails_component_1 = require('./permissao_indicador_dadosDetails.component');
var permissao_indicador_dadosEdit_component_1 = require('./permissao_indicador_dadosEdit.component');
var permissao_indicador_dados_routes = [{ path: '', component: permissao_indicador_dados_component_1.Permissao_indicadorDadosComponent, children: [{ path: 'details', component: permissao_indicador_dadosDetails_component_1.Permissao_indicadorDadosDetailsComponent }, { path: 'edit', component: permissao_indicador_dadosEdit_component_1.Permissao_indicadorDadosEditComponent }] }];
exports.permissao_indicador_dados_routing = router_1.RouterModule.forChild(permissao_indicador_dados_routes);
//# sourceMappingURL=permissao_indicador_dados.routing.js.map