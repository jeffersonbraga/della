"use strict";
var router_1 = require('@angular/router');
var menu_dados_component_1 = require('./menu_dados.component');
var menu_dadosDetails_component_1 = require('./menu_dadosDetails.component');
var menu_dadosEdit_component_1 = require('./menu_dadosEdit.component');
var menu_dados_routes = [{ path: '', component: menu_dados_component_1.MenuDadosComponent, children: [{ path: 'details', component: menu_dadosDetails_component_1.MenuDadosDetailsComponent }, { path: 'edit', component: menu_dadosEdit_component_1.MenuDadosEditComponent }] }];
exports.menu_dados_routing = router_1.RouterModule.forChild(menu_dados_routes);
//# sourceMappingURL=menu_dados.routing.js.map