import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { DataserviceService } from 'src/app/servicios/dataservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
//OBJETO JSON
  Datos=[
    {codigo:0 , descripcion:"" , precioCmp: 0 , precioVnt: 0 , ganancia: 0 , cantidad: 0  }
  ]
  data=Object.values(this.Datos);


//TEST:
//OBTENIENDO UN OBJETO DEL LOCAL STORAGE
// objetoDataLocal:any
//     objetojson!:string


//VALORES DE ENVIO
  // contador:any
//->


//VALORES DEL FORM
codigobarras!:number
descripcion!:string 
PrecioCmp!:number
PrecioVnt!:number
Ganancia!:number
Existencia!:number

//RUTAS PERSONALIZADAS Y SERVICIO DE GUARDADO
constructor(private rutaActiva: ActivatedRoute , public dataservice : DataserviceService) { }

//GUARDARNDO DATOS
 guardarEnArray(){
  this.data.push({codigo:this.codigobarras , descripcion:this.descripcion , precioCmp: this.PrecioCmp , precioVnt: this.PrecioVnt , ganancia: this.Ganancia , cantidad: this.Existencia  })


  this.dataservice.DatosDeProducto = this.data


  console.log(this.dataservice.DatosDeProducto)

//TEST:
  //IMPORTANDO EL OBJETO JSON AL LOCAL STORAGE
  // localStorage.setItem("datos", JSON.stringify(this.data))
  //OBTENIENDO UN OBJETO DEL LOCAL STORAGE
  // this.objetoDataLocal =localStorage.getItem("datos")
  // this.objetojson= JSON.parse(this.objetoDataLocal)
  // console.log(this.objetojson)
//->

 }


ngOnInit():void {
  // console.log(this.data)
}
}
