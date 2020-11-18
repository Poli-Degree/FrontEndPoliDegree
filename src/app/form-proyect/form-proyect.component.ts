import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import {Proyect} from '../models/proyect.model';
import { Usuario } from '../models/user.model';
import { InfoProyectService } from '../service/info-proyect.service';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-form-proyect',
  templateUrl: './form-proyect.component.html',
  styleUrls: ['./form-proyect.component.css']
})
export class FormProyectComponent implements OnInit {


  newProyect: Proyect;
  title: string;
  tutores: Usuario [];
  tutor: Usuario;
  constructor(private infoProyectService: InfoProyectService, private userInfoService: UserInfoService) { 
    this.title = 'Registro proyecto';
    this.newProyect = new Proyect ();
    this.tutores = new Array <Usuario> ();
  }

  ngOnInit(): void {
   
    for (let index = 0; index < environment.Users.length; index++) {
        if (environment.Users[index].usertype == "Tutor") {
            this.tutores.push(environment.Users[index]);
        }
    }
  }

  registrar() {
    this.newProyect.idUser = environment.User.idUser;
    this.newProyect.tutor = this.tutor.idUser;
    this.infoProyectService.creationProyect(this.newProyect);
  }


}
