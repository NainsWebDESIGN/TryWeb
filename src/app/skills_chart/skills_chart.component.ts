import { Component, OnInit } from '@angular/core';
import { ListenService } from '@service/Listen.service'

@Component({
  selector: 'app-skills_chart',
  templateUrl: './skills_chart.component.html',
  styleUrls: ['./skills_chart.component.scss']
})
export class Skills_chartComponent implements OnInit {
  data: any = { line: [], circle: [] };
  constructor(public scroll: ListenService) { }
  ngOnInit() {
    this.scroll.DataBass.subscribe((el: any) => {
      this.data.line = el.skills.line;
      this.data.circle = el.skills.circle;
    })
  }

}
