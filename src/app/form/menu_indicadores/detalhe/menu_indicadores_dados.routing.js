"use strict";
var router_1 = require('@angular/router');
var menu_indicadores_dados_component_1 = require('./menu_indicadores_dados.component');
var menu_indicadores_dadosDetails_component_1 = require('./menu_indicadores_dadosDetails.component');
var menu_indicadores_dadosEdit_component_1 = require('./menu_indicadores_dadosEdit.component');
var menu_indicadores_dados_routes = [{ path: '', component: menu_indicadores_dados_component_1.Menu_indicadoresDadosComponent, children: [{ path: 'details', component: menu_indicadores_dadosDetails_component_1.Menu_indicadoresDadosDetailsComponent }, { path: 'edit', component: menu_indicadores_dadosEdit_component_1.Menu_indicadoresDadosEditComponent }] }];
exports.menu_indicadores_dados_routing = router_1.RouterModule.forChild(menu_indicadores_dados_routes);
//# sourceMappingURL=menu_indicadores_dados.routing.js.map