import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList Application';
  tasks = [];

  addTask(newTask: string){
    this.tasks.push(newTask);
  }

  deleteTask(index){
    this.tasks.splice(index, 1);
  }

}
