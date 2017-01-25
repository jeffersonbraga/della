"use strict";
var router_1 = require('@angular/router');
var fabricante_dados_component_1 = require('./fabricante_dados.component');
var fabricante_dadosDetails_component_1 = require('./fabricante_dadosDetails.component');
var fabricante_dadosEdit_component_1 = require('./fabricante_dadosEdit.component');
var fabricante_dados_routes = [{ path: '', component: fabricante_dados_component_1.FabricanteDadosComponent, children: [{ path: 'details', component: fabricante_dadosDetails_component_1.FabricanteDadosDetailsComponent }, { path: 'edit', component: fabricante_dadosEdit_component_1.FabricanteDadosEditComponent }] }];
exports.fabricante_dados_routing = router_1.RouterModule.forChild(fabricante_dados_routes);
//# sourceMappingURL=fabricante_dados.routing.js.map