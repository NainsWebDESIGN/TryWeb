import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '@service/Language.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @ViewChildren("ScrollBox") ScrollAnimate: QueryList<ElementRef>;
  data: any = [];
  scrollBox: any = false;
  constructor(private http: HttpClient, public lang: LanguageService) { }

  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data = el.blog;
      document.body.addEventListener('scroll', () => {
        //客戶端高度
        let clientH = Number($(window).height());
        //滾動的高度
        let scrollTop = Number(document.body.scrollTop);
        if (this.ScrollAnimate.first.nativeElement) {
          // 物件位置 + 物件高度的幾成
          let Scroll = this.ScrollAnimate.first.nativeElement;
          let Dom = Number(Scroll.offsetTop) + (Number(Scroll.clientHeight) * 0.31);
          // 客戶端高度 + 物件頂部已滾動的距離
          this.scrollBox = (clientH + scrollTop) > Dom ? true : false;
        }
      })
    })
  }

}
