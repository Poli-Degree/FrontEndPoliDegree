import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from '../environment/env';


@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  tasksService: Array<Task>; 

  constructor(private http: HttpClient) {
    this.tasksService = new Array <Task> ();
   }

   creationTask (newTask: Task) {
    this.http.post(`${environment.apiUrl}tasks`,newTask).subscribe(task => console.log(task));
    
  }


  getAllTasks(idProyect): Observable<{data: Task[]}>{

  return this.http.get<{data: Task[]}>(`${environment.apiUrl}tasks/${idProyect}`)
  }

  updateStatus (task: Task) {
    this.http.put(`${environment.apiUrl}tasks/${task.idTask}`, task).subscribe(task => console.log(task));
  }
}
