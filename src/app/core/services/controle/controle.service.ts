import { Injectable } from '@angular/core';
import { Usuario } from '../../../../app/modelo/Usuario';
import { Menu_topoComponent } from '../../componentes/menu_topo/menu_topo.component';

@Injectable()
export class ControleService {

	private usuario     : Usuario;

	private menu_topo   : Menu_topoComponent;

    //public contexto_aplicacao   : string = "http://192.168.0.28:8181/";
    public contexto_aplicacao   : string = "http://192.168.0.28:8181";

    public setMenu_topo(mn : Menu_topoComponent) {
        this.menu_topo = mn;
    }

    public getMenu_topo() : Menu_topoComponent {
        return this.menu_topo;
    }

    public setUsuario(usr : Usuario) {
        this.usuario = usr;
    }

    public getUsuario() : Usuario {
        return this.usuario;
    }

    public alterarStatusMenuTopo(vl : boolean) : void {
        return this.menu_topo.alterarStatusMenu(vl);
    }
}