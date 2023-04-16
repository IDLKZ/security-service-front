import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-sidebar',
  templateUrl: './auth-sidebar.component.html',
  styleUrls: ['./auth-sidebar.component.scss']
})
export class AuthSidebarComponent implements OnInit {
  @Input() sideBarOpen:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
