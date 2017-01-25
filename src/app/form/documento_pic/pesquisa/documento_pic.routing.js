"use strict";
var router_1 = require('@angular/router');
var documento_pic_component_1 = require('./documento_pic.component');
var documento_pic_routes = [{ path: 'documento_pic*', pathMatch: 'full', redirectTo: '/documento_pic' }, { path: 'documento_pic', component: documento_pic_component_1.Documento_picComponent }];
exports.documento_pic_routing = router_1.RouterModule.forChild(documento_pic_routes);
//# sourceMappingURL=documento_pic.routing.js.map