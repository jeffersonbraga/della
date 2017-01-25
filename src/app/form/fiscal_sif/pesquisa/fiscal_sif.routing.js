"use strict";
var router_1 = require('@angular/router');
var fiscal_sif_component_1 = require('./fiscal_sif.component');
var fiscal_sif_routes = [{ path: 'fiscal_sif*', pathMatch: 'full', redirectTo: '/fiscal_sif' }, { path: 'fiscal_sif', component: fiscal_sif_component_1.Fiscal_sifComponent }];
exports.fiscal_sif_routing = router_1.RouterModule.forChild(fiscal_sif_routes);
//# sourceMappingURL=fiscal_sif.routing.js.map