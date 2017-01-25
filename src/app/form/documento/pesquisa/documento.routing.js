"use strict";
var router_1 = require('@angular/router');
var documento_component_1 = require('./documento.component');
var documento_routes = [{ path: 'documento*', pathMatch: 'full', redirectTo: '/documento' }, { path: 'documento', component: documento_component_1.DocumentoComponent }];
exports.documento_routing = router_1.RouterModule.forChild(documento_routes);
//# sourceMappingURL=documento.routing.js.map