import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/user.model';
import {ThemePalette} from '@angular/material/core';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
 
  title: string;
  newUser: Usuario;
  constructor(private userInfoService: UserInfoService) { 
    this.title = 'Registro Poli Degree';
    this.newUser = new Usuario ();
  }
  rolUsuario: string;
  roles: string[] = ['Estudiante', 'Tutor', 'Jurado'];
  hide = true;
  color: ThemePalette = 'primary'

  ngOnInit(): void {
  }

  crearUsuario(){
    
    this.userInfoService.createUser(this.newUser);
   }
  }

  



