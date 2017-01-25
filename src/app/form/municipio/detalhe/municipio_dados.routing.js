"use strict";
var router_1 = require('@angular/router');
var municipio_dados_component_1 = require('./municipio_dados.component');
var municipio_dadosDetails_component_1 = require('./municipio_dadosDetails.component');
var municipio_dadosEdit_component_1 = require('./municipio_dadosEdit.component');
var municipio_dados_routes = [{ path: '', component: municipio_dados_component_1.MunicipioDadosComponent, children: [{ path: 'details', component: municipio_dadosDetails_component_1.MunicipioDadosDetailsComponent }, { path: 'edit', component: municipio_dadosEdit_component_1.MunicipioDadosEditComponent }] }];
exports.municipio_dados_routing = router_1.RouterModule.forChild(municipio_dados_routes);
//# sourceMappingURL=municipio_dados.routing.js.map