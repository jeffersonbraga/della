import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 

 @Component({   
     moduleId: module.id,   
     selector: 'compra-dados',   
     templateUrl: 'compra_dados.component.html' 
}) 

export class CompraDadosComponent implements OnInit {       
    
    displayMode: CompraDadosDisplayModeEnum;     
    displayModeEnum = CompraDadosDisplayModeEnum;       
    
    constructor(private router: Router) { }      
    
    ngOnInit() {       
        
        const path = this.router.url.split('/')[3];       
        
        switch (path) {         
            
            case 'details':           
            this.displayMode = CompraDadosDisplayModeEnum.Details;           
            break;         
            case 'info':           
            this.displayMode = CompraDadosDisplayModeEnum.Orders;           
            break;         
            case 'edit':           
            this.displayMode = CompraDadosDisplayModeEnum.Edit;
            break;
        }
    }
}

enum CompraDadosDisplayModeEnum {   
    Details=0,   
    Orders=1,   
    Edit=2 
}