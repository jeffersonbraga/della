"use strict";
var router_1 = require('@angular/router');
var plano_acao_nc_component_1 = require('./plano_acao_nc.component');
var plano_acao_nc_routes = [{ path: 'plano_acao_nc*', pathMatch: 'full', redirectTo: '/plano_acao_nc' }, { path: 'plano_acao_nc', component: plano_acao_nc_component_1.Plano_acao_ncComponent }];
exports.plano_acao_nc_routing = router_1.RouterModule.forChild(plano_acao_nc_routes);
//# sourceMappingURL=plano_acao_nc.routing.js.map