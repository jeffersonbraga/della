"use strict";
var router_1 = require('@angular/router');
var periodicidade_component_1 = require('./periodicidade.component');
var periodicidade_routes = [{ path: 'periodicidade*', pathMatch: 'full', redirectTo: '/periodicidade' }, { path: 'periodicidade', component: periodicidade_component_1.PeriodicidadeComponent }];
exports.periodicidade_routing = router_1.RouterModule.forChild(periodicidade_routes);
//# sourceMappingURL=periodicidade.routing.js.map