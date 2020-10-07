import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  tasksService: Array<Task>; 

  constructor(private http: HttpClient) {
    this.tasksService = new Array <Task> ();
   }

   creationTask (newTask: Task) {
    this.http.post('https://polidegree.herokuapp.com/tasks',newTask).subscribe(task => console.log(task));
    
  }


  getAllTasks(): Observable<{data: Task[]}>{

  return this.http.get<{data: Task[]}>('https://polidegree.herokuapp.com/tasks/1')
  }
}