import { Component, OnInit } from '@angular/core';
import { ListenService } from '@service/Listen.service'

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {
  data: any = [];
  constructor(public scroll: ListenService) { }
  ngOnInit() {
    this.scroll.DataBass.subscribe((el: any) => {
      this.data = el.development;
    })
  }

}
