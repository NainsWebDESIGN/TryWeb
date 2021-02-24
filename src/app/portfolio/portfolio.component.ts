import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '@service/Language.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChildren("ScrollBox") ScrollAnimate: QueryList<ElementRef>;
  data: any = { title: [], content: [] };
  header: string = '*';
  scrollBox: any = [false, false];
  constructor(private http: HttpClient, public lang: LanguageService) { }
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
      addEventListener('scroll', (el: any) => {
        //客戶端高度
        let clientH = el.target.scrollingElement.clientHeight;
        //滾動的高度
        let scrollTop = el.target.scrollingElement.scrollTop;
        // 物件位置 + 物件高度的幾成
        let Scroll = this.ScrollAnimate.first.nativeElement;
        let Top = Number(Scroll.offsetParent.offsetParent.offsetParent.offsetTop) + Number(Scroll.offsetParent.offsetParent.offsetTop);
        let Dom1 = Top + (Number(Scroll.clientHeight) * 0.19);
        let Dom2 = Top + (Number(Scroll.clientHeight) * 0.49);
        // 客戶端高度 + 物件頂部已滾動的距離
        let concat = Number(clientH) + Number(scrollTop);
        this.scrollBox[0] = concat > Dom1 ? true : false;
        this.scrollBox[1] = concat > Dom2 ? true : false;
      })
    })
  }

}
