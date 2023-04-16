import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {SharedModule} from "../shared/shared.module";
import { ListOfServicemanComponent } from './list-of-serviceman/list-of-serviceman.component';
import { CreateListOfServicemanComponent } from './create-list-of-serviceman/create-list-of-serviceman.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { MailingListComponent } from './mailing-list/mailing-list.component';

@NgModule({
  declarations: [
    AdminIndexComponent,
    AdminLayoutComponent,
    ListOfServicemanComponent,
    CreateListOfServicemanComponent,
    MailingListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FontAwesomeModule,

  ]
})
export class AdminModule { }
