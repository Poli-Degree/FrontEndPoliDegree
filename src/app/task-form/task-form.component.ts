import { Component, OnInit } from '@angular/core';
import {Task} from '../models/task.model';
import { TaskInfoService } from '../service/task-info.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {


  newTask: Task;
  title: string;
  


  constructor(private taskInfoService: TaskInfoService) { 
    this.title = 'Mis tareas';
    this.newTask = new Task();
  }

  ngOnInit(): void {
  }

  taskCreation () {
    
    this.taskInfoService.creationTask(this.newTask);
    
  }

}
