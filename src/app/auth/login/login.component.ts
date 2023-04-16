import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  loginForm:FormGroup;
  constructor(private fb: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initializeFormGroup()
  }


  initializeFormGroup():void{
    this.loginForm = this.fb.group({
      login: ['', [Validators.required,]],
      password: ['', [Validators.required]]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      this.toastr.success('Successfully sended!', 'Success!');
    }
    else{
      this.toastr.error('Form is invalid!', 'Failure!');

    }
  }

}
