import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ControleService } from '../../services/controle/controle.service';

@Component({ 
  moduleId: module.id,
  selector: 'menu-topo', 
  templateUrl: 'menu_topo.component.html'
})

export class Menu_topoComponent implements OnInit {

  private menu_visivel : boolean;

  constructor(private controleApp: ControleService) {
    this.controleApp.setMenu_topo(this);
    this.menu_visivel = false;
  }

  ngOnInit() {
    if (this.controleApp.getUsuario() != null) {
      this.menu_visivel = true;
    }
  }

  public alterarStatusMenu( vl : boolean) : void {
    this.menu_visivel = vl;
  }
}