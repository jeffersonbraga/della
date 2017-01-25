"use strict";
var router_1 = require('@angular/router');
var config_pesquisa_component_1 = require('./config_pesquisa.component');
var config_pesquisa_routes = [{ path: 'config_pesquisa*', pathMatch: 'full', redirectTo: '/config_pesquisa' }, { path: 'config_pesquisa', component: config_pesquisa_component_1.Config_pesquisaComponent }];
exports.config_pesquisa_routing = router_1.RouterModule.forChild(config_pesquisa_routes);
//# sourceMappingURL=config_pesquisa.routing.js.map