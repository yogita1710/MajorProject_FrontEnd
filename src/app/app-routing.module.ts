import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListstudentComponent} from './liststudent/liststudent.component';
import {CreatestudentComponent} from './createstudent/createstudent.component';
import {UpdatestudentComponent} from './updatestudent/updatestudent.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:"showAll",component:ListstudentComponent},
  {path:"createStudent", component: CreatestudentComponent},
  {path:'update/:id',component:UpdatestudentComponent},
  {path:"", component: HomeComponent},
  {path:'home',component:HomeComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
