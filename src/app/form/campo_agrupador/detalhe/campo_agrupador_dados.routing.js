"use strict";
var router_1 = require('@angular/router');
var campo_agrupador_dados_component_1 = require('./campo_agrupador_dados.component');
var campo_agrupador_dadosDetails_component_1 = require('./campo_agrupador_dadosDetails.component');
var campo_agrupador_dadosEdit_component_1 = require('./campo_agrupador_dadosEdit.component');
var campo_agrupador_dados_routes = [{ path: '', component: campo_agrupador_dados_component_1.Campo_agrupadorDadosComponent, children: [{ path: 'details', component: campo_agrupador_dadosDetails_component_1.Campo_agrupadorDadosDetailsComponent }, { path: 'edit', component: campo_agrupador_dadosEdit_component_1.Campo_agrupadorDadosEditComponent }] }];
exports.campo_agrupador_dados_routing = router_1.RouterModule.forChild(campo_agrupador_dados_routes);
//# sourceMappingURL=campo_agrupador_dados.routing.js.map