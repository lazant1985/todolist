import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-to-do-persons',
  templateUrl: './to-do-persons.component.html',
  styleUrls: ['./to-do-persons.component.css']
})
export class ToDoPersonsComponent implements OnInit {

  @Output() newPersonEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addNewPerson(value: string){
    this.newPersonEvent.emit(value);
  }
}
