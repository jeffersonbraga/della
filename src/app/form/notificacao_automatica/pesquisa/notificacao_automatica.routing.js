"use strict";
var router_1 = require('@angular/router');
var notificacao_automatica_component_1 = require('./notificacao_automatica.component');
var notificacao_automatica_routes = [{ path: 'notificacao_automatica*', pathMatch: 'full', redirectTo: '/notificacao_automatica' }, { path: 'notificacao_automatica', component: notificacao_automatica_component_1.Notificacao_automaticaComponent }];
exports.notificacao_automatica_routing = router_1.RouterModule.forChild(notificacao_automatica_routes);
//# sourceMappingURL=notificacao_automatica.routing.js.map