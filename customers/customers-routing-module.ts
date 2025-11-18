import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Customer } from './customer/customer';

const routes: Routes = [
  {
    path: '',
    component: Customer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
