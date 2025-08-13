import { Component, Input } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) nombre?: string;
  isAddingNewTask = false;

  constructor(private tasksService: TasksService) {}

  get userTasksSelected() {
    return this.tasksService.getTasksByUserId(this.userId);
  }

  onTaskAdded() {
    this.isAddingNewTask = true;
  }

  onCloseNewTask() {
    this.isAddingNewTask = false;
  }
}
