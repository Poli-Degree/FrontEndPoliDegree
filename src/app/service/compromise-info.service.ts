import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compromise } from '../models/compromise.model';
import { environment } from '../environment/env';

@Injectable({
  providedIn: 'root'
})
export class CompromiseInfoService {

  compromisesService: Array<Compromise>; 

  constructor(private http: HttpClient) {
    this.compromisesService = new Array <Compromise> ();
   }

   creationCompromise (newCompromise: Compromise) {
    this.http.post(`${environment.apiUrl}promises`,newCompromise).subscribe(compromise => console.log(compromise));
    
  }


  getAllCompromises(idProyect): Observable<{data: Compromise[]}>{

  return this.http.get<{data: Compromise[]}>(`${environment.apiUrl}promises/${idProyect}`)
  }

  updateStatus (compromise: Compromise) {
    this.http.put(`${environment.apiUrl}promises/${compromise.idPromise}`, compromise).subscribe(promise => console.log(promise));
  }

}