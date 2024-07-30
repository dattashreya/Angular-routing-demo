import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromService1() {
    this.infoReceived1 = this.dservice.getInfo1();
  }

  getInfoFromService2() {
    this.infoReceived2 = this.dservice.getInfo2();
  }

  getInfoFromService3() {
    this.infoReceived3 = this.dservice.getInfo3();
  }

  constructor(private dservice: EmployeeService) {}

  ngOnInit(): void {}
}
