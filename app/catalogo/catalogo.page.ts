import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  leerMas:boolean=false;
  carritos:Array<any>=[];
  carritoElegido: string="";
  constructor(private router:Router) { }

  ngOnInit() {
    this.mostrarCarritos();
  }

  mostrarCarritos(){
    this.carritos = [

      {
        imagen: "https://i.postimg.cc/dkFxht8x/carrito2.jpg",
        placa: "ast123",
        numPasajeros: "2",
        color: "blanco",
        modelo: "2015",
        marca: "mazda",
        precioRentaHora: "10.000",
        precioRentaSemana: "40.000",
        kilometraje: "100",
        disponible: "No"
      },
      {
        imagen: "https://i.postimg.cc/VdZpKw8J/carrito3.jpg",
        placa: "aud548",
        numPasajeros: "4",
        color: "blanco",
        modelo: "2012",
        marca: "mazda",
        precioRentaHora: "7.000",
        precioRentaSemana: "20.000",
        kilometraje: "20",
        disponible: "Si"
      },
      {
        imagen: "https://i.postimg.cc/nj1wBb2c/carrito4.jpg",
        placa: "ays475",
        numPasajeros: "2",
        color: "blanco",
        modelo: "2021",
        marca: "mazda",
        precioRentaHora: "10.000",
        precioRentaSemana: "30.000",
        kilometraje: "0",
        disponible: "Si"
      },
      {
        imagen: "https://i.postimg.cc/Yjk598RC/carrito.jpg",
        placa: "asd154",
        numPasajeros: "4",
        color: "blanco",
        modelo: "2015",
        marca: "mazda",
        precioRentaHora: "8.000",
        precioRentaSemana: "30.000",
        kilometraje: "20",
        disponible: "Si"
      }
    ]
  }

  detalles(i){
    this.carritoElegido=this.carritos[i].placa;
    if (this.leerMas) {
      this.leerMas=false;
    } else {
      this.leerMas=true;
    }
  }

  goToConsultar(){
    this.router.navigate(['../consultar']);
  }


}
