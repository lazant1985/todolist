import {Component, Input, OnInit} from '@angular/core';
import {Task} from './models/task.model';
import {Person} from './models/person.model';
import {ToDoList} from './models/todolist.model';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from './api.service';



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

  constructor(private dialog: MatDialog,
              private apiService: ApiService){}

   /*ngOnInit(){
    this.apiService.getRequest()
      .subscribe((data: Task)=>{
      console.log(data);
    })
   }*/


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
    let index =  this.persons.findIndex(item => item.id === id);
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

  openDialogTask(id: number){
    let index = this.tasks.findIndex(item => item.id === id);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        name: this.tasks[index].name
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) =>{
      if(confirmed)
      this.deleteTask(id);
    })
  }

  openDialogPerson(id: number){
    let index = this.persons.findIndex(item => item.id === id);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        name: this.persons[index].name
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) =>{
      if(confirmed)
        this.deletePerson(id);
    })
  }

  openDialogList(index:number){
    let indexTask = this.persons.findIndex(item => item.id === index);
    let indexPerson = this.persons.findIndex(item => item.id === index);
      const dialogRef = this.dialog.open(DialogComponent, {
        data:   {
            nameTask: this.tasks[indexTask].name,
            namePerson: this.persons[indexPerson].name
          }
      });
      dialogRef.afterClosed().subscribe((confirmed: boolean) =>{
        if(confirmed)
          this.deleteList(index);
      })


  }

  serverRequestNews(){
      this.apiService.getRequestNews()
        .subscribe((data)=>{
          console.log(data);
        })
  }

  serverRequestNBA(){
    this.apiService.getRequestNBA()
      .subscribe((data)=>{
        console.log(data);
      })
  }

  GetApiServer(){
    this.apiService.getApiServer()
      .subscribe((data)=>{
        alert(data);
      })

  }


  GetApiValues(){
    this.apiService.getApiValueServer()
      .subscribe((data) =>{
        alert(data);
      })
  }

  PostApiValues(){
    this.apiService.postApiValueServer()
      .subscribe((data) =>{
        alert(data);
      })
  }

  PutApiValues(){
    this.apiService.putApiValueServer()
      .subscribe((data) =>{
        alert(data);
      })
  }

  DeleteApiValues(){
    this.apiService.deleteApiValueServer()
      .subscribe((data) =>{
        alert(data);
      })
  }

}
