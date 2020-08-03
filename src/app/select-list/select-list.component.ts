import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../models/task.model';
import {Person} from '../models/person.model';
import {ToDoList} from '../models/todolist.model';



@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent  {

  @Input() arTasks: Task[];
  @Input() arPersons: Person[];
  @Input() arList: ToDoList[];
  chooseTask: Task;
  choosePerson: Person;

  addItem(){
    this.arList.push({taskId: this.chooseTask.id, personId: this.choosePerson.id});
  }

}
