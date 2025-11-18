import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReverseCasePipe } from './pipe/reverse-case-pipe';
import { AlternateCasePipe } from './pipe/alternate-case-pipe';
import { FlexBox } from './flex-demo/flex-box/flex-box';
import { HttpClient } from '@angular/common/http';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReverseCasePipe, AlternateCasePipe, FlexBox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('my-app');
  myVal: string = "Angular signal";

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchData();
  }
  isLoading: boolean = false;
  apiUrl: any = "https://mockrest.com";
  data: any;
  fetchData() {
    this.isLoading = true;
    this.http.get(this.apiUrl).subscribe(response => {
      this.data = response;
      this.isLoading = false;
      console.log("data.....", this.data);
    })
  }
}
