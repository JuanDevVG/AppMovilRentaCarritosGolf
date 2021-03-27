import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.page.html',
  styleUrls: ['./consultar.page.scss'],
})
export class ConsultarPage implements OnInit { 

  constructor() { }

  ngOnInit() {
  }

  rentas = [
    {
      placa: "agd154",
      numLicencia: "3214864521",
      fechaRenta: "13/10/2020",
      horaRenta: "5:00",
      fechaDevolucion: "15/10/2020",
      horaDevolucion: "5:00",
      kilometraje: "20",
      estadoVehiculo: "Bueno",
      descripcionEstadoVehiculo: "Sin mantenimiento"
    },
  ]
}
