"use strict";
var router_1 = require('@angular/router');
var checagem_documento_dados_component_1 = require('./checagem_documento_dados.component');
var checagem_documento_dadosDetails_component_1 = require('./checagem_documento_dadosDetails.component');
var checagem_documento_dadosEdit_component_1 = require('./checagem_documento_dadosEdit.component');
var checagem_documento_dados_routes = [{ path: '', component: checagem_documento_dados_component_1.Checagem_documentoDadosComponent, children: [{ path: 'details', component: checagem_documento_dadosDetails_component_1.Checagem_documentoDadosDetailsComponent }, { path: 'edit', component: checagem_documento_dadosEdit_component_1.Checagem_documentoDadosEditComponent }] }];
exports.checagem_documento_dados_routing = router_1.RouterModule.forChild(checagem_documento_dados_routes);
//# sourceMappingURL=checagem_documento_dados.routing.js.map