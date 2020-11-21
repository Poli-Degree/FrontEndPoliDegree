import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environment/env';
import { Proyect } from 'src/app/models/proyect.model';
import { Usuario } from 'src/app/models/user.model';
import { InfoProyectService } from 'src/app/service/info-proyect.service';
import { UserInfoService } from 'src/app/service/user-info.service';


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
