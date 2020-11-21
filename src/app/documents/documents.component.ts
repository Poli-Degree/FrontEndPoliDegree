import { Component, OnInit } from '@angular/core';
import { Proyect } from '../models/proyect.model';
import { environment } from '../environment/env';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  title: string;
  proyects: Proyect []; 
  selectedProyect: Proyect;

  constructor() {
    this.title = 'Mis Documentos';
    this.proyects = environment.Proyects;
   }

  ngOnInit(): void {
  }

}
