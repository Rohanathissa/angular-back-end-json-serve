import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  tasksData: any = [];

  constructor( private taskService: TaskService) { 

  }
  
  ngOnInit(): void {
    // this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    this.taskService.getTasksByApi().subscribe((responsetwo) => {
      this.tasks = responsetwo;
    });
   
  }

  daleteTask(task: Task){

    this.taskService.deleteTask(task).subscribe((responsetwo) => {
      console.log("delete ", responsetwo);
    });

  }

  updateTask(task: Task){
    this.taskService.updateTask(task).subscribe((responce)=> {
      console.log("update", responce);
    })
  }
  addTask(task: Task){
    this.taskService.addTask(task).subscribe((responce)=>{
      console.log(responce);
      this.tasks.push(task);
    });
  }

}
