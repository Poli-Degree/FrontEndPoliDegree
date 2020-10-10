import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compromise } from '../models/compromise.model';

@Injectable({
  providedIn: 'root'
})
export class CompromiseInfoService {

  compromisesService: Array<Compromise>; 

  constructor(private http: HttpClient) {
    this.compromisesService = new Array <Compromise> ();
   }

   creationCompromise (newCompromise: Compromise) {
    this.http.post('https://polidegree.herokuapp.com/promises',newCompromise).subscribe(compromise => console.log(compromise));
    
  }


  getAllCompromises(): Observable<{data: Compromise[]}>{

  return this.http.get<{data: Compromise[]}>('https://polidegree.herokuapp.com/promises/151')
  }
}