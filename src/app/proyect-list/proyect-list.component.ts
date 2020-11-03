import { Component, OnInit } from '@angular/core';
import { Proyect } from '../models/proyect.model';
import { InfoProyectService } from '../service/info-proyect.service';

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
  /**el constructor invoca una lista de tipo Proyect */
  constructor(private infoProyectService: InfoProyectService) { 
   this.proyects= new Array <Proyect> ();
  }
  /**obtiene los proyectos */
  ngOnInit(): void {
    this.infoProyectService.getAllProyects();
  }
  /**Funcion de llenado de proyectos */
  fillProyects() {
    this.infoProyectService.getAllProyects().subscribe((proyect)=> {
      this.proyects=proyect.data;
      console.log(this.proyects);});
  }
}
