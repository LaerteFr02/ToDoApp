import { TaskService } from './../shared/task.service';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input()
  task: Task = new Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  remove(task: Task){
    this.taskService.delete(task.id);
  }

  onCompletedCheckChange(task: Task){
    this.taskService.save(task);
  }
}
