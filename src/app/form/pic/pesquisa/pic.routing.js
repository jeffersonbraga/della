"use strict";
var router_1 = require('@angular/router');
var pic_component_1 = require('./pic.component');
var pic_routes = [{ path: 'pic*', pathMatch: 'full', redirectTo: '/pic' }, { path: 'pic', component: pic_component_1.PicComponent }];
exports.pic_routing = router_1.RouterModule.forChild(pic_routes);
//# sourceMappingURL=pic.routing.js.map