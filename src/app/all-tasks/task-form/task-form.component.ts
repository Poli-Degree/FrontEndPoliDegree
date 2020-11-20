import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environment/env';
import { Proyect } from 'src/app/models/proyect.model';
import { Task } from 'src/app/models/task.model';
import { InfoProyectService } from 'src/app/service/info-proyect.service';
import { TaskInfoService } from 'src/app/service/task-info.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {


  newTask: Task;
  title: string;
  selectedProyect: Proyect;
  proyects: Proyect [];


  constructor(private taskInfoService: TaskInfoService, private infoProyectService: InfoProyectService) { 
    this.title = 'Mis tareas';
    this.newTask = new Task();
    this.proyects = environment.Proyects;
  }

  ngOnInit(): void {
    this.infoProyectService.getAllProyects(environment.User.idUser).subscribe((proyect)=> {
      environment.Proyects = proyect.data;});
      this.proyects = environment.Proyects;
  }

  taskCreation () {
    this.newTask.idProyect = this.selectedProyect.idProyect;
    this.taskInfoService.creationTask(this.newTask);

  }

}
