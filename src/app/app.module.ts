import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ToDoTasksComponent } from './to-do-tasks/to-do-tasks.component';
import { ToDoPersonsComponent } from './to-do-persons/to-do-persons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectListComponent } from './select-list/select-list.component';
import { MatSelectModule} from '@angular/core/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ToDoTasksComponent,
    ToDoPersonsComponent,
    SelectListComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
