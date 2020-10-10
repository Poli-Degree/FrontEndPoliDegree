import { Component, OnInit } from '@angular/core';
import { Proyect } from '../models/proyect.model';
import { InfoProyectService } from '../service/info-proyect.service';

@Component({
  selector: 'app-proyect-list',
  templateUrl: './proyect-list.component.html',
  styleUrls: ['./proyect-list.component.css']
})
export class ProyectListComponent implements OnInit {


  proyects: Array<Proyect>;

  constructor(private infoProyectService: InfoProyectService) { 
   this.proyects= new Array <Proyect> ();
  }

  ngOnInit(): void {
    this.infoProyectService.getAllProyects();
  }

  fillProyects() {
    this.infoProyectService.getAllProyects().subscribe((proyect)=> {
      this.proyects=proyect.data;
      console.log(this.proyects);});
  }
}
