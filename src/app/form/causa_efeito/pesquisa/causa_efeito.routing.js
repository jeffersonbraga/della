"use strict";
var router_1 = require('@angular/router');
var causa_efeito_component_1 = require('./causa_efeito.component');
var causa_efeito_routes = [{ path: 'causa_efeito*', pathMatch: 'full', redirectTo: '/causa_efeito' }, { path: 'causa_efeito', component: causa_efeito_component_1.Causa_efeitoComponent }];
exports.causa_efeito_routing = router_1.RouterModule.forChild(causa_efeito_routes);
//# sourceMappingURL=causa_efeito.routing.js.map