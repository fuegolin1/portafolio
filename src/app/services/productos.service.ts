import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargado=true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  
  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
    var promise = new Promise<void>( (resolve, reject) => {
      this.http.get('https://curso-angular-2021-ebe5a-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any) =>  {
         this.productos = resp;
         this.cargado=false;
         resolve();
      });
    });

    return promise;
  }

  getProducto(id: String) {
    return this.http.get(`https://curso-angular-2021-ebe5a-default-rtdb.firebaseio.com/productos/${id}.json`)
   }

   buscarProductos(termino:string){   
      if(this.productos.length === 0){
        this.cargarProductos().then( () => {
            this.filtrarProductos(termino);
        });
      }else{
          this.filtrarProductos(termino);
      }

      
  }

   private filtrarProductos(termino: string){

    this.productosFiltrados= [];
    termino = termino.toLocaleLowerCase();
    
     this.productos.forEach(prod =>{
        const titulo = prod.titulo.toLocaleLowerCase();

        if(prod.categoria.indexOf(termino) >= 0 || titulo.indexOf(termino) >=0){
          this.productosFiltrados.push(prod);
        }
     });
   }

}




