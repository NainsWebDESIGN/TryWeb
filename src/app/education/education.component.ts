import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  data: any = { education: [], experience: [] };
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data.education = el.Education.education;
      this.data.experience = el.Education.experience;
    })
  }

}
