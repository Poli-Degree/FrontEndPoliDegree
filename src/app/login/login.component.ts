import { Component, OnInit } from '@angular/core';
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

  constructor(private userInfoService: UserInfoService) { 
    this.usuario = new Usuario();
  }

  hide = true;

  ngOnInit(): void {
  }
  

}
