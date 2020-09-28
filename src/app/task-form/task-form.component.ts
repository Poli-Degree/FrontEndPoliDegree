import { Component, OnInit } from '@angular/core';
import {Task} from '../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {


  title: string;
  creationDate: Date;
  dateLimit: Date;
  asunto: string;
  idProyect: number;
  description: string;


  constructor() { 
    this.title = 'Mis tareas';
  }

  ngOnInit(): void {
  }

  taskCreation () {

    let newTask: Task = {
    
    asunto: this.asunto,
    idProyect: this.idProyect,
    creationDate: this.creationDate,
    limitDate: this.dateLimit,
    description: this.description
    }
  console.log(newTask);
  
  }

}
