import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
    declarations: [
        AuthSidebarComponent,
        AdminSidebarComponent
    ],
  exports: [
    AuthSidebarComponent,
    AdminSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
