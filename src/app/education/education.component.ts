import { Component, OnInit } from '@angular/core';
import { ListenService } from '@service/Listen.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  data: any = { education: [], experience: [] };
  constructor(public scroll: ListenService) { }

  ngOnInit() {
    this.scroll.DataBass.subscribe((el: any) => {
      this.data.education = el.Education.education;
      this.data.experience = el.Education.experience;
    })
  }

}
