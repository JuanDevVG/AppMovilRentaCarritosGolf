import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: any;

  constructor(private router:Router) {}
  
  goToCatalogo(){
    if(this.nombre.length > 0){
      this.router.navigate(['../catalogo']);
    }
  }

    
}
