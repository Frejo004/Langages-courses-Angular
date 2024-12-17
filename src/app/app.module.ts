import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { TaskGroupComponent } from './components/tasks/task-group/task-group.component';
import { TaskGroupListComponent } from './components/tasks/task-group-list/task-group-list.component';
import { SearchTaskComponent } from './components/tasks/search-task/search-task.component';
import { FormAddTaskComponent } from './components/tasks/form-add-task/form-add-task.component';
import { AfficheDetailLangagesComponent } from './components/tests/affiche-detail-langages/affiche-detail-langages.component';
import { AfficheListLangagesComponent } from './components/tests/affiche-list-langages/affiche-list-langages.component';
import { TestComponent } from './components/tests/test/test.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { NavComponent } from './components/layout/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskGroupComponent,
    TaskGroupListComponent,
    SearchTaskComponent,
    FormAddTaskComponent,
    AfficheDetailLangagesComponent,
    AfficheListLangagesComponent,
    TestComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    MainContentComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
