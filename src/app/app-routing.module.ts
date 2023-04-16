import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from "./auth/auth.module";

const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule)
  },
  {
    path:"",
    loadChildren:()=>import("./auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path:"",
    loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
