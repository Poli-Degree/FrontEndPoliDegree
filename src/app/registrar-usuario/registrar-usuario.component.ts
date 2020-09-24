import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/user.model';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  title: string;
  miUsuario: Usuario;

  constructor() { 
    this.title = 'Registro Poli Degree';
    this.miUsuario = new Usuario();
    this.miUsuario.nombre = this.miUsuario.nombre;
    this.miUsuario.codigo = this.miUsuario.codigo;
    this.miUsuario.correo = this.miUsuario.correo;
    this.miUsuario.password = this.miUsuario.password;
  }
  rolUsuario: string;
  roles: string[] = ['Estudiante', 'Tutor', 'Jurado'];
  hide = true;

  ngOnInit(): void {
  }

  


}
