import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { FAKE_USERS } from './fake-users';

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = FAKE_USERS;

  onUserSelected = (id: string) => {
    console.log(`Usuario seleccionado: ${id}`);
  }
}
