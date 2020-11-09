import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyect } from '../models/proyect.model';
import { Observable } from 'rxjs';
import { environment } from '../environment/env';

@Injectable({
  providedIn: 'root'
})
export class InfoProyectService {

  constructor(private http: HttpClient) { }


 creationProyect (newProyect: Proyect) {
  
    this.http.post(`${environment.apiUrl}proyects`,newProyect).subscribe(proyect => console.log(proyect));

 }

  getAllProyects(): Observable<{data: Proyect[]}>{

  return this.http.get<{data: Proyect[]}>(`${environment.apiUrl}proyects/1`)
  }


}
