import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { CensorComponent } from './pages/censor/censor.component';
import { UserslistComponent } from './pages/userslist/userslist.component';
import { TasklistComponent } from './pages/tasklist/tasklist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    { path: 'censor', component: CensorComponent },
    { path: 'userslist', component: UserslistComponent },
    { path: 'tasklist', component: TasklistComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
