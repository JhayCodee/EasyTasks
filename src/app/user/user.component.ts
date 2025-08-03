import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selectedUser!: boolean;
  @Output() selection = new EventEmitter<string>();
  // selection = output<string>();

  get imagePath(): string {
    return `assets/usuarios/${this.user.avatar}`;
  }

  onClickUser = () => {
    this.selection.emit(this.user.id);
  };
}
