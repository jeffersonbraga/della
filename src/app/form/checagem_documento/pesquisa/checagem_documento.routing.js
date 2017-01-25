"use strict";
var router_1 = require('@angular/router');
var checagem_documento_component_1 = require('./checagem_documento.component');
var checagem_documento_routes = [{ path: 'checagem_documento*', pathMatch: 'full', redirectTo: '/checagem_documento' }, { path: 'checagem_documento', component: checagem_documento_component_1.Checagem_documentoComponent }];
exports.checagem_documento_routing = router_1.RouterModule.forChild(checagem_documento_routes);
//# sourceMappingURL=checagem_documento.routing.js.map