"use strict";
var router_1 = require('@angular/router');
var configuracao_helpdesk_component_1 = require('./configuracao_helpdesk.component');
var configuracao_helpdesk_routes = [{ path: 'configuracao_helpdesk*', pathMatch: 'full', redirectTo: '/configuracao_helpdesk' }, { path: 'configuracao_helpdesk', component: configuracao_helpdesk_component_1.Configuracao_helpdeskComponent }];
exports.configuracao_helpdesk_routing = router_1.RouterModule.forChild(configuracao_helpdesk_routes);
//# sourceMappingURL=configuracao_helpdesk.routing.js.map