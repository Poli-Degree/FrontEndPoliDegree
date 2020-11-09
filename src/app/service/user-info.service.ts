import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuario } from '../models/user.model';
import { environment } from '../environment/env';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) {
    
   }

    createUser (newUser: Usuario) {
        this.http.post(`${environment.apiUrl}users`, newUser).subscribe(user =>console.log(user));
    }
    
    buscarUser (username: String) {
      return this.http.get <{data: Usuario}>(`${environment.apiUrl}users/${username}`);
    }

  }
