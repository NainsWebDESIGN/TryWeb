import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {
  data: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe(el => {
      this.data = el;
    })
  }

}
