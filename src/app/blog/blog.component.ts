import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  Scroll(_Event: any) {
    //客戶端高度
    // let clientH = _Event.path[0].scrollingElement.clientHeight;
    //body高度
    // let bodyH = _Event.path[0].scrollingElement.clientHeight;
    //滾動的高度
    let scrollTop = _Event.path[0].scrollingElement.scrollTop;
    this.scrollBox = scrollTop > 5156 ? true : false;
  }
  data: any = [];
  scrollBox: any = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data = el.blog;
    })
  }

}
