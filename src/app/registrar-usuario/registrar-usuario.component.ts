import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/user.model';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  title: string;
  username: string;
  codigo: number;
  correo: string;
  password: string;
  favoriteSeason: string;
  seasons: string[];

  constructor() { 
    this.title = 'Registro Poli Degree';
  }
  rolUsuario: string;
  roles: string[] = ['Estudiante', 'Tutor', 'Jurado'];
  hide = true;
  color: ThemePalette = 'primary'

  ngOnInit(): void {
  }

  crearUsuario(){
    let newUsuario: Usuario={
      username: this.username,
      codigo: this.codigo,
      correo: this.correo,
      password: this.password,
    }
    console.log(newUsuario);
  }

  


}
