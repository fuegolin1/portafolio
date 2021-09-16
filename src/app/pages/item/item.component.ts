import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

 pd!: ProductoDescripcion;
 id?: string;
  
  constructor(
    private route: ActivatedRoute, 
    public productoservice: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
          this.productoservice.getProducto(parametros['id'])
            .subscribe((producto: any) => {
              this.id = parametros['id'];
              this.pd = producto;
              
            });
    });
  }

}
