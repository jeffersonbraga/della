"use strict";
var router_1 = require('@angular/router');
var servico_component_1 = require('./servico.component');
var servico_routes = [
    { path: 'servico*', pathMatch: 'full', redirectTo: '/servico' },
    { path: 'servico', component: servico_component_1.ServicoComponent }];
exports.servico_routing = router_1.RouterModule.forChild(servico_routes);
//# sourceMappingURL=servico.routing.js.map