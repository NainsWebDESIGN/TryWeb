import { Component, OnInit, HostListener, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {
  @ViewChildren("ScrollBox") ScrollAnimate: QueryList<ElementRef>;
  @HostListener('window:scroll', ['$event'])
  Scroll(_Event: any) {
    //客戶端高度
    let clientH = _Event.path[0].scrollingElement.clientHeight;
    //滾動的高度
    let scrollTop = _Event.path[0].scrollingElement.scrollTop;
    if (this.ScrollAnimate) {
      // 物件位置 + 物件高度的幾成
      let Scroll = this.ScrollAnimate.first.nativeElement;
      let Dom = Number(Scroll.offsetTop) + (Number(Scroll.clientHeight) * 0.31);
      // 客戶端高度 + 物件頂部已滾動的距離
      let concat = Number(clientH) + Number(scrollTop);
      this.scrollBox = concat > Dom ? true : false;
    }
  }
  data: any = [];
  scrollBox: any = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data = el.blog;
    })
  }
  ngAfterViewInit() {
    // console.log(this.ScrollAnimate)
  }
}
