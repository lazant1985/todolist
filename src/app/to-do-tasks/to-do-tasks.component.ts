import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-tasks',
  templateUrl: './to-do-tasks.component.html',
  styleUrls: ['./to-do-tasks.component.css']
})
export class ToDoTasksComponent implements OnInit {

  @Output() newTaskEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addNewTask(value: string){
    this.newTaskEvent.emit(value);

  }



}
