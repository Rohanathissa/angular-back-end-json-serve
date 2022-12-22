import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { tasks } from 'src/app/mok-task';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() taskObj!: Task;
  faTimes = faTimes;
  @Output() onDaleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onUpdateTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(item: any){
    console.log("remove", item);
    this.onDaleteTask.emit(item);
  }

  onUpdate(task: Task ){
    task.remaind = !task.remaind;
    this.onUpdateTask.emit(task)
  }
}
