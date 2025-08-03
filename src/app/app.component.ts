import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { FAKE_USERS } from './fake-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = FAKE_USERS;
  userSelectedId?: string;

  get userSelected() {
    return this.users.find(user => user.id === this.userSelectedId)!;
  }

  onUserSelected = (id: string) => {
    this.userSelectedId = id;
  }
}
