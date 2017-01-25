"use strict";
var router_1 = require('@angular/router');
var equipamento_component_1 = require('./equipamento.component');
var equipamento_routes = [{ path: 'equipamento*', pathMatch: 'full', redirectTo: '/equipamento' }, { path: 'equipamento', component: equipamento_component_1.EquipamentoComponent }];
exports.equipamento_routing = router_1.RouterModule.forChild(equipamento_routes);
//# sourceMappingURL=equipamento.routing.js.map