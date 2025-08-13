import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from '../task/task.model';

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

  fakeTasks = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen:
        'Apreder todas las características básicas y avanzasAngular cómo apicarlas.',
      expira: '2025-01-01',
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda',
      expira: '2025-11-05',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen:
        'Preparar y describir una plantilla de carrito de compras de la tienda online',
      expira: '2025-05-16',
    },
  ];

  get userTasksSelected() {
    return this.fakeTasks.filter((task) => task.idUsuario === this.userId);
  }

  onTaskCompleted(id: string) {
    this.fakeTasks = this.fakeTasks.filter((task) => task.id !== id);
  }

  onTaskAdded() {
    this.isAddingNewTask = true;
  }

  onCancelNewTask() {
    this.isAddingNewTask = false;
  }

  onNewTaskAdded(event: NewTask) {
    this.fakeTasks.unshift({
      id: new Date().getTime().toString(),
      idUsuario: this.userId,
      ...event,
    });

    this.isAddingNewTask = false;
  }
}
