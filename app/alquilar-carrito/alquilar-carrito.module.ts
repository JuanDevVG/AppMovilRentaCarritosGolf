import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlquilarCarritoPageRoutingModule } from './alquilar-carrito-routing.module';

import { AlquilarCarritoPage } from './alquilar-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlquilarCarritoPageRoutingModule
  ],
  declarations: [AlquilarCarritoPage]
})
export class AlquilarCarritoPageModule {}
