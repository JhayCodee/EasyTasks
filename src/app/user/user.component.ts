import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
   templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) avatar!: string;
  @Input({required: true}) nombre!: string;
  @Input({required: true}) id!: string;

  @Output() selection = new EventEmitter<string>();
  // selection = output<string>();

  get imagePath(): string {
    return `assets/usuarios/${this.avatar}`;
  }

  onClickUser = () => {
    this.selection.emit(this.id);
  }

}
