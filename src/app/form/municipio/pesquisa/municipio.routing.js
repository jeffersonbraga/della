"use strict";
var router_1 = require('@angular/router');
var municipio_component_1 = require('./municipio.component');
var municipio_routes = [{ path: 'municipio*', pathMatch: 'full', redirectTo: '/municipio' }, { path: 'municipio', component: municipio_component_1.MunicipioComponent }];
exports.municipio_routing = router_1.RouterModule.forChild(municipio_routes);
//# sourceMappingURL=municipio.routing.js.map