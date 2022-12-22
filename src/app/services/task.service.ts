import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { Task } from '../Task';
import { tasks} from '../mok-task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  option:any = {};

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    const tasksData = of(tasks);
    console.log(tasksData);
    return tasksData;
  }

  getTasksByApi(): Observable<any> {
    // this.option.headers = new HttpHeaders();
    // this.option.headers = this.option.headers.set('Content-Type', 'application/json');
    return this.http.get<Task[]>(this.apiUrl,httpOptions);
    // return this.http.request('GET',this.apiUrl, this.option.headers);
  }

  deleteTask(task: Task): Observable<Task>{
    if(typeof task.id === "undefined"){
      alert("Unable to delete !")
    }
    const url = `${this.apiUrl}/${task.id}`;
    return  this.http.delete<Task>(url);
  }

  updateTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task, httpOptions);

  }

  addTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}`;
    return this.http.post<Task>(url, task, httpOptions);
  }
}
