import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  listReceived: string[] = [];
  getListFromService() {
    this.listReceived = this.dservice.getLists();
  }
  constructor(private  dservice: EmployeeService) {}

  ngOnInit(): void {}
}