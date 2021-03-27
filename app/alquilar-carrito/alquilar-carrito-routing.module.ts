import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlquilarCarritoPage } from './alquilar-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: AlquilarCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlquilarCarritoPageRoutingModule {}
