import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Usuario } from '../models/user.model';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  username: string;
  password: string;
  link: string;

  constructor(private userInfoService: UserInfoService) { 
    this.usuario = new Usuario();
    this.link = "/login";
  }

  hide = true;

  ngOnInit(): void {
  }
  
  public loguear () {
    let usuario = this.userInfoService.buscarUser(this.username).subscribe(
      (user) => {
        if (user.data == null) {
          console.log("Usuario no registra");
        }else if(user.data.password == this.password) {
          environment.User = user.data;  
          this.link = "/verPerfil";
        } else {
          console.log("contraseña incorrecta");
        }
      }
    )
  }


}
