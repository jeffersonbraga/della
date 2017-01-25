"use strict";
var router_1 = require('@angular/router');
var config_campo_pesquisa_component_1 = require('./config_campo_pesquisa.component');
var config_campo_pesquisa_routes = [{ path: 'config_campo_pesquisa*', pathMatch: 'full', redirectTo: '/config_campo_pesquisa' }, { path: 'config_campo_pesquisa', component: config_campo_pesquisa_component_1.Config_campo_pesquisaComponent }];
exports.config_campo_pesquisa_routing = router_1.RouterModule.forChild(config_campo_pesquisa_routes);
//# sourceMappingURL=config_campo_pesquisa.routing.js.map