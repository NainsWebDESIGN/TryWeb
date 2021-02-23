import { Component, OnInit, HostListener, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
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
        let Dom1 = Number(Scroll.offsetParent.offsetTop) + (Number(Scroll.clientHeight) * 0.19);
        let Dom2 = Number(Scroll.offsetParent.offsetTop) + (Number(Scroll.clientHeight) * 0.49);
        // 客戶端高度 + 物件頂部已滾動的距離
        let concat = Number(clientH) + Number(scrollTop);
        this.scrollBox[0] = concat > Dom1 ? true : false;
        this.scrollBox[1] = concat > Dom2 ? true : false;
      }
    } else {
      this.scrollBox[0] = true;
      this.scrollBox[1] = true;
    }
  }
  data: any = { title: [], content: [] };
  header: string = '*';
  scrollBox: any = [false, false];
  constructor(private http: HttpClient) { }
  check(_Name: string) {
    this.header = _Name;
    switch (_Name) {
      case '*':
        $('.grid-item').fadeIn('300');
        break;
      default:
        $('.grid-item').not('.' + _Name).fadeOut('300');
        $('.grid-item').filter('.' + _Name).fadeIn('300');
        break;
    }
  }
  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data.title = el.portfolio.header;
      this.data.content = el.portfolio.content;
    })
  }

}
