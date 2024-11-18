import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Data from Node.js API</h1>
    <div *ngIf="data">
      <p>{{ data.message }}</p>
      <ul>
        <li *ngFor="let item of data.items">{{ item }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (response) => {
        console.log('Response:', response);
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
