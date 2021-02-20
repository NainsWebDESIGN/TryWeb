import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills_chart',
  templateUrl: './skills_chart.component.html',
  styleUrls: ['./skills_chart.component.scss']
})
export class Skills_chartComponent implements OnInit {
  data: any = { line: [], circle: [] };
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data.line = el.skills.line;
      this.data.circle = el.skills.circle;
    })
  }

}
