import { Todo } from ".";

export class TodoList {
  constructor() {
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardaLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardaLocalStorage();
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardaLocalStorage();
        break;
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardaLocalStorage();
  }

  guardaLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  cargarLocalStorage() {
    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : (this.todos = []);

    this.todos = this.todos.map(Todo.fromJson);
  }
}
