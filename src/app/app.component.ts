import { Component, Input } from '@angular/core';
import {Task} from './models/task.model';
import {Person} from './models/person.model';
import {ToDoList} from './models/todolist.model';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList Application';
  tasks: Task[] = [];
  persons: Person[] = [];
  indexTask: number = 0;
  indexPerson: number = 0;
  lists: ToDoList[] = [];


  addTask(taskName: string){
    let task = {
      id: this.indexTask,
      name: taskName
    };
    this.tasks.push(task);
    this.indexTask++;
  }

  deleteTask(id: number){
    let index = this.tasks.findIndex(item => item.id === id);
    this.tasks.splice(index, 1);
    let newLists = this.lists.filter(item => item.taskId === id);
    for (let i = 0; i < newLists.length; i++){
      let indexLists = this.lists.findIndex(item => item.taskId === id);
      this.lists.splice(indexLists,1);
    }
  }

  addPerson(personName: string){
    let person = {
      id: this.indexPerson,
      name: personName
    };
    this.persons.push(person);
    this.indexPerson++;
  }

  deletePerson(id: number){
    let index =  this.tasks.findIndex(item => item.id === id);
    this.persons.splice(index, 1);
    let newLists = this.lists.filter(item => item.personId === id);
    for (let i = 0; i < newLists.length; i++) {
      let indexLists = this.lists.findIndex(item => item.personId === id);
      this.lists.splice(indexLists, 1);
    }
  }

  getTaskNameById(taskId: number): string{
    return this.tasks.find(item => item.id === taskId).name
  }

  getPersonNameById(personId: number): string{
    return this.persons.find(item => item.id === personId).name
  }

  deleteList(index){
    this.lists.splice(index, 1);
  }







}
