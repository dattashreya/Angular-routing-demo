import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const Error = {
  username: {
    pattern: 'Username should not contain any special characters'
  },
  password: {
    pattern: 'Password must contain a minimum of 6 characters includes atleast 1 alphanumeric and special character'
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errMsg = [];

  loginForm: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern(/^[\w\s]+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')])
    })
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.errMsg = [];
      if (!this.loginForm.get('username').valid) {
        this.errMsg.push(Error.username.pattern);
      }
      if (!this.loginForm.get('password').valid) {
        this.errMsg.push(Error.password.pattern);
      }
    } else {
      this.errMsg = [];
      console.log(this.loginForm.value);
      this.loginForm.reset();
      alert('Login Successfully');
    }
  }
}
