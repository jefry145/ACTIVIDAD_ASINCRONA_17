import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { DetallesComponent } from "./pages/detalles/detalles.component";
import { ProductsComponent } from "./pages/products/products.component";

const routes : Routes = [
    {path : "" , component : ProductsComponent},
    {path : "detalles/:id" , component : DetallesComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}