<p align="center">
  <img src="src/assets/listado-tareas-logo.png" alt="Easy Tasks" width="72" />
</p>

# Easy Tasks — Gestor de tareas minimalista (Angular 18)

![Angular](https://img.shields.io/badge/Angular-18-EA3323?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/estado-en%20desarrollo-4f8cff)

Pequeña aplicación de tareas construida con Angular 18 y componentes standalone.

## 🚀 Demo local

```bash
npm install
npm start
```

##### abrir en http://localhost:4200

## ✨ Características

- ✅ Componentes standalone (sin módulos) y control de estado simple
- ✅ Persistencia en `localStorage`
- ✅ Diseño responsive

## 🧩 Estructura

```text
src/
  app/
    header/                # Encabezado sticky con marca
    shared/card/           # Contenedor visual reutilizable
    user/                  # Item de usuario (selector en sidebar)
    tasks/
      new-task/            # Modal para crear tarea
      task/                # Tarjeta de tarea
      tasks.component.*    # Listado + acciones
    app.component.*        # Layout principal (sidebar + contenido)
  assets/                  # Logo + avatares
  styles.css               # Variables, utilidades y base global
```

## 🛠️ Scripts

- `npm start`: inicia el servidor de desarrollo
- `npm run build`: compila para producción
- `npm test`: ejecuta pruebas unitarias (si están configuradas)

## 🏗️ Tecnologías

- Angular 18 (componentes standalone)
- TypeScript 5
- CSS moderno con variables y utilidades propias

## 🤝 Contribuir

¡Sugerencias, issues y PRs son bienvenidos! Mantén un estilo de código claro y consistente.
