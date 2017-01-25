"use strict";
var router_1 = require('@angular/router');
var ideia_reuniao_pic_dados_component_1 = require('./ideia_reuniao_pic_dados.component');
var ideia_reuniao_pic_dadosDetails_component_1 = require('./ideia_reuniao_pic_dadosDetails.component');
var ideia_reuniao_pic_dadosEdit_component_1 = require('./ideia_reuniao_pic_dadosEdit.component');
var ideia_reuniao_pic_dados_routes = [{ path: '', component: ideia_reuniao_pic_dados_component_1.Ideia_reuniao_picDadosComponent, children: [{ path: 'details', component: ideia_reuniao_pic_dadosDetails_component_1.Ideia_reuniao_picDadosDetailsComponent }, { path: 'edit', component: ideia_reuniao_pic_dadosEdit_component_1.Ideia_reuniao_picDadosEditComponent }] }];
exports.ideia_reuniao_pic_dados_routing = router_1.RouterModule.forChild(ideia_reuniao_pic_dados_routes);
//# sourceMappingURL=ideia_reuniao_pic_dados.routing.js.map