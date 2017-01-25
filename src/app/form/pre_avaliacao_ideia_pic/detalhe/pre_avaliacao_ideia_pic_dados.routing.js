"use strict";
var router_1 = require('@angular/router');
var pre_avaliacao_ideia_pic_dados_component_1 = require('./pre_avaliacao_ideia_pic_dados.component');
var pre_avaliacao_ideia_pic_dadosDetails_component_1 = require('./pre_avaliacao_ideia_pic_dadosDetails.component');
var pre_avaliacao_ideia_pic_dadosEdit_component_1 = require('./pre_avaliacao_ideia_pic_dadosEdit.component');
var pre_avaliacao_ideia_pic_dados_routes = [{ path: '', component: pre_avaliacao_ideia_pic_dados_component_1.Pre_avaliacao_ideia_picDadosComponent, children: [{ path: 'details', component: pre_avaliacao_ideia_pic_dadosDetails_component_1.Pre_avaliacao_ideia_picDadosDetailsComponent }, { path: 'edit', component: pre_avaliacao_ideia_pic_dadosEdit_component_1.Pre_avaliacao_ideia_picDadosEditComponent }] }];
exports.pre_avaliacao_ideia_pic_dados_routing = router_1.RouterModule.forChild(pre_avaliacao_ideia_pic_dados_routes);
//# sourceMappingURL=pre_avaliacao_ideia_pic_dados.routing.js.map