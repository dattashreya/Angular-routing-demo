import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  info1: string[] = ['John Mathew', 'E354', 'jm@abc.net'];
  info2: string[] = ['Rob Wilson', 'E673', 'rw@abc.net'];
  info3: string[] = ['Rose Adams', 'E865', 'ra@abc.net'];
  lists: string[] = ['Shreya', 'Shri', 'Shreyo'];
  getInfo1():string[]{
    return this.info1
  }

  getInfo2():string[]{
    return this.info2
  }

  getInfo3():string[]{
    return this.info3
  }

  getLists():string[] {
    return this.lists
  }
}
