export interface Task {
  id: string;
  idUsuario: string;
  titulo: string;
  resumen: string;
  expira: string;
}

export interface NewTask {
  titulo: string;
  resumen: string;
  expira: string;
}
