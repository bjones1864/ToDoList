import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './models/todo';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DecimalPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do List';

  formTask: Todo = {} as Todo;

  todoList: Todo[] = [
    {
      task: "Clean room",
      completed: false,
      duration: 30,
      priority: "Low"
    },
    {
      task: "Walk Dog",
      completed: true,
      duration: 45,
      priority: "Normal"
    },
    {
      task: "Buy Gift",
      completed: false,
      duration: 60,
      priority: "High"
    }
  ];

  completeTask(t: Todo): void {
    t.completed = true;
  }

  removeTask(t: Todo): void {
    this.todoList.splice(this.todoList.findIndex(i => i == t), 1)
  }

  isPriority(t : Todo, p : string): boolean {
    return t.priority == p;
  }

  addTask(): void{
    this.todoList.push({...this.formTask});
  }
}