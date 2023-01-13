import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './detalles/detalles.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from '../app.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetallesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    DetallesComponent,
    ProductsComponent
  ]
})
export class PagesModule { }
