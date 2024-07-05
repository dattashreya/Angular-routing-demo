import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginViewComponent {
  submitted = false;
  userModal = new Hero();

  onSubmit() { 
    this.submitted = true; 
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.userModal);
  }
}
