import { Component, OnInit } from '@angular/core';
import {faCheck,faWindowClose} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.scss']
})
export class MailingListComponent implements OnInit {
  faCheck = faCheck;
  faWindowClose = faWindowClose;
  constructor() { }

  ngOnInit(): void {
  }

}
