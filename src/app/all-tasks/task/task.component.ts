import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskInfoService } from 'src/app/service/task-info.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task;
  taskStatus: string;
  constructor(private taskInfoService: TaskInfoService) {
    this.taskStatus = 'Tarea Pendiente';
  }

  ngOnInit(): void {
    if (this.task.status == 0) {
      this.taskStatus = 'Tarea Pendiente';
      } else {
        this.taskStatus = 'Tarea Terminada';  
      }
  }

  chooseTaskStatus() {
    if (this.task.status == 0) {
      this.task.status = 1;
      this.taskStatus = 'Tarea Terminada';
    } else {
      this.task.status = 0;
      this.taskStatus = 'Tarea Pendiente';
    }
     this.taskInfoService.updateStatus(this.task);

  }
}
