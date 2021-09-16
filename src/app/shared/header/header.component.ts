import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfopaginaService } from 'src/app/services/infopagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor
  (
    public _infopag: InfopaginaService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }


  public buscarProducto(termino: string){
    if(termino.length < 1 )
    return;

    this.router.navigate(['/search',termino]);

  }

}
