import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {AdminIndexComponent} from "./admin-index/admin-index.component";
import {ListOfServicemanComponent} from "./list-of-serviceman/list-of-serviceman.component";
import {CreateListOfServicemanComponent} from "./create-list-of-serviceman/create-list-of-serviceman.component";
import {MailingListComponent} from "./mailing-list/mailing-list.component";

const routes: Routes = [
  {
    path:"admin",
    component:AdminLayoutComponent,
    children:[
      {
        path:"",
        component:AdminIndexComponent
      },
      {
        path:"list-serviceman",
        component:ListOfServicemanComponent
      },
      {
        path:"create-list-of-serviceman",
        component:CreateListOfServicemanComponent
      },
      {
        path:"mailing-list",
        component:MailingListComponent
      }
    ]



  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
