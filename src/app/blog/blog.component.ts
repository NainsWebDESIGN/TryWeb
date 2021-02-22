import { Component, OnInit, HostListener } from '@angular/core';
import { ListenService } from '@service/Listen.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  data: any = [];
  constructor(public scroll: ListenService) { }

  ngOnInit() {
    this.scroll.DataBass.subscribe((el: any) => {
      this.data = el.blog;
    })
  }

}
