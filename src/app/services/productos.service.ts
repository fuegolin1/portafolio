import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargado=true;
  productos: Producto[] = [];
  
  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
   this.http.get('https://curso-angular-2021-ebe5a-default-rtdb.firebaseio.com/productos_idx.json')
   .subscribe( (resp: any) =>  {
      this.productos = resp;
       
       setTimeout(() => {
        this.cargado=false;
       }, 1000);
   });



  }
}
