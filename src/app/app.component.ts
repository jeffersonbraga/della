import { Component } from '@angular/core';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `
    <nav class="navbar navbar-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">
            <!--<img alt="Brand" src="../images/people.png">-->
        </a>
        </div>
        <div class="container-fluid navbar-right">
            <menu-topo></menu-topo>
        </div>
    </nav>
    <router-outlet></router-outlet>

    <!--<footer>
        <div class="navbar navbar-fixed-bottom">
            <div class="navbar-inner footer">
                <div class="container">
                    <footer>
                        <div class="row">
                            <div class="col-md-12">
                                <h4>Life Software Development</h4>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </footer>-->`
})
export class AppComponent {

}
