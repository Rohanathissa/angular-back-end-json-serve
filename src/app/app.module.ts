import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {  } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TasksItemComponent } from './component/tasks-item/tasks-item.component';
import { ButtonComponent } from './component/button/button.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';

const appRout: Routes = [
  {path: '', component: TasksComponent },
  {path: 'about', component: AboutComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TasksItemComponent,
    ButtonComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRout, {enableTracing:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
