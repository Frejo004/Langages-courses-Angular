import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { TaskGroupComponent } from './components/tasks/task-group/task-group.component';
import { TaskGroupListComponent } from './components/tasks/task-group-list/task-group-list.component';
import { SearchTaskComponent } from './components/tasks/search-task/search-task.component';
import { FormAddTaskComponent } from './components/tasks/form-add-task/form-add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskGroupComponent,
    TaskGroupListComponent,
    SearchTaskComponent,
    FormAddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
