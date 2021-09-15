import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoEquipo, InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

info: InfoPagina = {};
equipo: any[] = [];
cargada = false;

  constructor( private http: HttpClient) { 
    this.CargarInfo();
    this.CargarInfoEquipo();
  }


  private CargarInfo(){
     // Leer el archivo JSON
     console.log('Servicio de infopagina listo .!!!!');
     this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp: InfoPagina)  => {
       this.cargada = true;
       this.info = resp;
 
     });
  }


 private CargarInfoEquipo(){
   this.http.get('https://curso-angular-2021-ebe5a-default-rtdb.firebaseio.com/equipo.json')
   .subscribe((resp: any) => {
    this.equipo = resp;
    console.log(resp);

   });
 }


}
