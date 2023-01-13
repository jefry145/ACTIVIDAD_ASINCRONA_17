import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataserviceService } from 'src/app/servicios/dataservice.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  //Objeto JSON
  datos:any
   //VALORES
 codigobarras!:number

    //VALORES
 descripcion!:string 
 PrecioCmp!:number
 PrecioVnt!:number
 Ganancia!:number
 Existencia!:number
//->


 //OBTENIENDO VALORES
  constructor(private rutaActiva: ActivatedRoute , public dataservice : DataserviceService) { }
  
  //TESTS:
  // mostrar(){
  //   // console.log(this.dataservice.DatosDeProducto.filter((element: { codigo: number; }) => element.codigo == this.codigobarras))
  //   console.log(this.datos)
  //   console.log(this.codigobarras)
  // }
  //->

 //MOSTRANDO ID

  ngOnInit():void {
 
    this.rutaActiva.paramMap.subscribe(
      (paramMap: any) => {
        const{params} = paramMap
    console.log(params.id)
    this.codigobarras = params.id
      }
    );
    this.datos=this.dataservice.DatosDeProducto.filter((element: { codigo: number; }) => element.codigo == this.codigobarras)
   console.log(this.datos)
   console.log(this.datos[0].codigo)
  }
  

  

}
