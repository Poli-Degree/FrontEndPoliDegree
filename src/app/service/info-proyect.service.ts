import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyect } from '../models/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class InfoProyectService {

  constructor(private http: HttpClient) { }


 creationProyect (newProyect: Proyect) {
  
    this.http.post('https://polidegree.herokuapp.com/proyects',newProyect).subscribe(proyect => console.log(proyect));

 }


}
