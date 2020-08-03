import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ToDoTasksComponent } from './to-do-tasks/to-do-tasks.component';
import { ToDoPersonsComponent } from './to-do-persons/to-do-persons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectListComponent } from './select-list/select-list.component';
import { MatSelectModule} from '@angular/core/material/select';


@NgModule({
  declarations: [
    AppComponent,
    ToDoTasksComponent,
    ToDoPersonsComponent,
    SelectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
