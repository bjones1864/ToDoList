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

  filter: string = "";

  todoList: Todo[] = [
    {
      task: "Clean room",
      completed: false,
      duration: 30,
      priority: "LOW"
    },
    {
      task: "Walk Dog",
      completed: true,
      duration: 45,
      priority: "NORMAL"
    },
    {
      task: "Buy Gift",
      completed: false,
      duration: 60,
      priority: "HIGH"
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

  isListComplete():boolean {
    //No items
    if(this.todoList.length == 0){
      return true;
    }
    //any incomplete
    let allComplete:boolean = true;
    this.todoList.forEach((t:Todo) =>{
      if(t.completed == false){
        allComplete = false;
      }
    });
    //all complete
    return allComplete;
  }

  getFiltered():Todo[] {
    if(this.filter == ""){
      return this.todoList;
    }
    else {
      return this.todoList.filter((t: Todo) => t.task.toLowerCase().includes(this.filter.toLowerCase()));
    }
  }


}