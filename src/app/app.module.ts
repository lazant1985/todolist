import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoTasksComponent } from './to-do-tasks/to-do-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoTasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
