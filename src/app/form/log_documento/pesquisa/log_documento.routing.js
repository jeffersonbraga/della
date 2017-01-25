"use strict";
var router_1 = require('@angular/router');
var log_documento_component_1 = require('./log_documento.component');
var log_documento_routes = [{ path: 'log_documento*', pathMatch: 'full', redirectTo: '/log_documento' }, { path: 'log_documento', component: log_documento_component_1.Log_documentoComponent }];
exports.log_documento_routing = router_1.RouterModule.forChild(log_documento_routes);
//# sourceMappingURL=log_documento.routing.js.map