import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from "./auth-layout/auth-layout.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path:"auth",
    component:AuthLayoutComponent,
    children:[
      {
        path: "login",
        component: LoginComponent
      },
    ]


  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
