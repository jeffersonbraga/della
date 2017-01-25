"use strict";
var router_1 = require('@angular/router');
var anexo_component_1 = require('./anexo.component');
var anexo_routes = [{ path: 'anexo*', pathMatch: 'full', redirectTo: '/anexo' }, { path: 'anexo', component: anexo_component_1.AnexoComponent }];
exports.anexo_routing = router_1.RouterModule.forChild(anexo_routes);
//# sourceMappingURL=anexo.routing.js.map