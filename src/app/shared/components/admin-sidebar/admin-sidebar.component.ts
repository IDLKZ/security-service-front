import { Component, OnInit } from '@angular/core';
import { faHome,faClipboardList,faFileExport,faEnvelopeOpen,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  faHome = faHome;
  faClipboardList = faClipboardList;
  faFileExport = faFileExport;
  faEnvelopeOpen = faEnvelopeOpen;
  faSignOutAlt = faSignOutAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
