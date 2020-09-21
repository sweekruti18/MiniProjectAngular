import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", component:HomeComponent},
  {path:"edituser/:id", component:EditUserComponent},
  {path:"adduser", component:AddUserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
