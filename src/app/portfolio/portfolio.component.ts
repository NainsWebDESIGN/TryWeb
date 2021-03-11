import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '@service/Language.service';
import { ApiService } from '@service/Api.service';

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
  constructor(private http: HttpClient, public lang: LanguageService, private api: ApiService) { }
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
      document.body.addEventListener('scroll', () => {
        //客戶端高度
        let clientH = Number($(window).height());
        //滾動的高度
        let scrollTop = Number(document.body.scrollTop);
        // 物件位置 + 物件高度的幾成
        let Scroll = this.ScrollAnimate.first.nativeElement;
        let Top = Number(Scroll.offsetParent.offsetParent.offsetParent.offsetTop) + Number(Scroll.offsetParent.offsetParent.offsetTop);
        let Dom1 = Top + (Number(Scroll.clientHeight) * 0.19);
        let Dom2 = Top + (Number(Scroll.clientHeight) * 0.49);
        // 客戶端高度 + 物件頂部已滾動的距離
        this.scrollBox[0] = (clientH + scrollTop) > Dom1 ? true : false;
        this.scrollBox[1] = (clientH + scrollTop) > Dom2 ? true : false;
      })
    })
    const req = { type: 'portfolio' };
    this.api.postServer(149, req);
  }

}
