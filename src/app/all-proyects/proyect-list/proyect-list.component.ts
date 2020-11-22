import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environment/env';
import { Proyect } from 'src/app/models/proyect.model';
import { InfoProyectService } from 'src/app/service/info-proyect.service';


@Component({
  selector: 'app-proyect-list',
  templateUrl: './proyect-list.component.html',
  styleUrls: ['./proyect-list.component.css']
})
export class ProyectListComponent implements OnInit {

  /**
   * Lista de proyectos 
   */
  proyects: Array<Proyect>;
  pageActual: number;
  items: number;
  proyect: string;
  /**el constructor invoca una lista de tipo Proyect */
  constructor(private infoProyectService: InfoProyectService) { 
   this.proyects= new Array <Proyect> ();
   this.pageActual = 1;
   this.items = 1;
  }
  /**obtiene los proyectos */
  ngOnInit(): void {
    this.infoProyectService.getAllProyects(environment.User.idUser).subscribe((proyect)=> {
      this.proyects=proyect.data;
      environment.Proyects = proyect.data;
      console.log(this.proyects);});
  
  }

  filtrar(){
    if (this.proyect != "") {
      this.proyects=this.proyects.filter(res =>{
      return res.title.toLocaleLowerCase().match(this.proyect.toLocaleLowerCase());
    });
    }else if (this.proyect ==""){
      this.ngOnInit();
    }
  }


}
