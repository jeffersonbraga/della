"use strict";
var router_1 = require('@angular/router');
var mapa_calor_component_1 = require('./mapa_calor.component');
var mapa_calor_routes = [
    { path: 'mapa_calor*', pathMatch: 'full', redirectTo: '/mapa_calor' },
    { path: 'mapa_calor', component: mapa_calor_component_1.Mapa_calorComponent }
];
exports.mapa_calor_routing = router_1.RouterModule.forChild(mapa_calor_routes);
//# sourceMappingURL=mapa_calor.routing.js.map