import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

info: InfoPagina = {};
cargada = false;

  constructor( private http: HttpClient) { 
    // Leer el archivo JSON
    console.log('Servicio de infopagina listo .!!!!');
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina)  => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);

    });

  }
}
