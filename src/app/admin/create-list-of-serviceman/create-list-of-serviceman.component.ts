import { Component, OnInit } from '@angular/core';
import {faCheck,faWindowClose} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-create-list-of-serviceman',
  templateUrl: './create-list-of-serviceman.component.html',
  styleUrls: ['./create-list-of-serviceman.component.scss']
})
export class CreateListOfServicemanComponent implements OnInit {
  faCheck = faCheck;
  faWindowClose = faWindowClose;
  constructor() { }

  ngOnInit(): void {
  }

}
