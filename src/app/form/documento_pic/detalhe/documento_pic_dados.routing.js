"use strict";
var router_1 = require('@angular/router');
var documento_pic_dados_component_1 = require('./documento_pic_dados.component');
var documento_pic_dadosDetails_component_1 = require('./documento_pic_dadosDetails.component');
var documento_pic_dadosEdit_component_1 = require('./documento_pic_dadosEdit.component');
var documento_pic_dados_routes = [{ path: '', component: documento_pic_dados_component_1.Documento_picDadosComponent, children: [{ path: 'details', component: documento_pic_dadosDetails_component_1.Documento_picDadosDetailsComponent }, { path: 'edit', component: documento_pic_dadosEdit_component_1.Documento_picDadosEditComponent }] }];
exports.documento_pic_dados_routing = router_1.RouterModule.forChild(documento_pic_dados_routes);
//# sourceMappingURL=documento_pic_dados.routing.js.map