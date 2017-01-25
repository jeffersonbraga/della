"use strict";
var router_1 = require('@angular/router');
var equipamento_dados_component_1 = require('./equipamento_dados.component');
var equipamento_dadosDetails_component_1 = require('./equipamento_dadosDetails.component');
var equipamento_dadosEdit_component_1 = require('./equipamento_dadosEdit.component');
var equipamento_dados_routes = [{ path: '', component: equipamento_dados_component_1.EquipamentoDadosComponent, children: [{ path: 'details', component: equipamento_dadosDetails_component_1.EquipamentoDadosDetailsComponent }, { path: 'edit', component: equipamento_dadosEdit_component_1.EquipamentoDadosEditComponent }] }];
exports.equipamento_dados_routing = router_1.RouterModule.forChild(equipamento_dados_routes);
//# sourceMappingURL=equipamento_dados.routing.js.map