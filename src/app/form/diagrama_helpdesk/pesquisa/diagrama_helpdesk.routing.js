"use strict";
var router_1 = require('@angular/router');
var diagrama_helpdesk_component_1 = require('./diagrama_helpdesk.component');
var diagrama_helpdesk_routes = [{ path: 'diagrama_helpdesk*', pathMatch: 'full', redirectTo: '/diagrama_helpdesk' }, { path: 'diagrama_helpdesk', component: diagrama_helpdesk_component_1.Diagrama_helpdeskComponent }];
exports.diagrama_helpdesk_routing = router_1.RouterModule.forChild(diagrama_helpdesk_routes);
//# sourceMappingURL=diagrama_helpdesk.routing.js.map