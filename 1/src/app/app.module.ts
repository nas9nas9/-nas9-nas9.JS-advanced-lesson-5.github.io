import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { CensorComponent } from './pages/censor/censor.component';
import { UserslistComponent } from './pages/userslist/userslist.component';
import { TasklistComponent } from './pages/tasklist/tasklist.component';
import { TableComponent } from './pages/tasklist/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CensorComponent,
    UserslistComponent,
    TasklistComponent,
    WorksComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
