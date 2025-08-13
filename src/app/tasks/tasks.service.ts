import { Injectable } from '@angular/core';
import { NewTask, Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private fakeTasks = [
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

  // localstorage
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.fakeTasks = JSON.parse(tasks);
    }
  }

  getTasksByUserId(userId: string): Task[] {
    return this.fakeTasks.filter((task) => task.idUsuario === userId);
  }

  addTask(task: NewTask, userId: string) {
    this.fakeTasks.unshift({
      id: new Date().getTime().toString(),
      idUsuario: userId,
      ...task,
    });
    this.saveTasks();
  }

  deleteTask(id: string) {
    this.fakeTasks = this.fakeTasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.fakeTasks));
  }
}
