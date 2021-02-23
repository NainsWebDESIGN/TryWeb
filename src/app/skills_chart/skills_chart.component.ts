import { Component, OnInit, HostListener, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills_chart',
  templateUrl: './skills_chart.component.html',
  styleUrls: ['./skills_chart.component.scss']
})
export class Skills_chartComponent implements OnInit {
  @ViewChildren("ScrollBox") ScrollAnimate: QueryList<ElementRef>;
  @HostListener('window:scroll', ['$event'])
  Scroll(_Event: any) {
    //客戶端高度
    let clientH = _Event.path[0].scrollingElement.clientHeight;
    //客戶端寬度
    let clientW = _Event.path[0].scrollingElement.clientWidth;
    //滾動的高度
    let scrollTop = _Event.path[0].scrollingElement.scrollTop;
    if (clientW > 767) {
      if (this.ScrollAnimate) {
        // 物件位置 + 物件高度的幾成
        let Scroll = this.ScrollAnimate.first.nativeElement;
        let Dom = Number(Scroll.offsetParent.offsetTop) + (Number(Scroll.clientHeight) * 0.49);
        // 客戶端高度 + 物件頂部已滾動的距離
        let concat = Number(clientH) + Number(scrollTop);
        this.scrollBox = concat > Dom ? true : false;
      }
    } else {
      this.scrollBox = true;
    }
  }
  data: any = { line: [], circle: [] };
  scrollBox: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data.line = el.skills.line;
      this.data.circle = el.skills.circle;
    })
  }

}
