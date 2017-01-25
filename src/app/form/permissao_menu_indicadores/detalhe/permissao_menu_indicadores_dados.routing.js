"use strict";
var router_1 = require('@angular/router');
var permissao_menu_indicadores_dados_component_1 = require('./permissao_menu_indicadores_dados.component');
var permissao_menu_indicadores_dadosDetails_component_1 = require('./permissao_menu_indicadores_dadosDetails.component');
var permissao_menu_indicadores_dadosEdit_component_1 = require('./permissao_menu_indicadores_dadosEdit.component');
var permissao_menu_indicadores_dados_routes = [{ path: '', component: permissao_menu_indicadores_dados_component_1.Permissao_menu_indicadoresDadosComponent, children: [{ path: 'details', component: permissao_menu_indicadores_dadosDetails_component_1.Permissao_menu_indicadoresDadosDetailsComponent }, { path: 'edit', component: permissao_menu_indicadores_dadosEdit_component_1.Permissao_menu_indicadoresDadosEditComponent }] }];
exports.permissao_menu_indicadores_dados_routing = router_1.RouterModule.forChild(permissao_menu_indicadores_dados_routes);
//# sourceMappingURL=permissao_menu_indicadores_dados.routing.js.map