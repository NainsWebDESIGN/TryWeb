import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '@service/Language.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  @ViewChildren("ScrollBox") ScrollAnimate: QueryList<ElementRef>;
  data: any = [];
  scrollBox: any = false;
  constructor(private http: HttpClient, public lang: LanguageService) { }
  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data = el.pricing;
      addEventListener('scroll', (el: any) => {
        //客戶端高度
        let clientH = el.target.scrollingElement.clientHeight;
        //滾動的高度
        let scrollTop = el.target.scrollingElement.scrollTop;
        // 物件位置 + 物件高度的幾成
        let Scroll = this.ScrollAnimate.first.nativeElement;
        let Dom = Number(Scroll.offsetTop) + (Number(Scroll.clientHeight) * 0.40);
        // 客戶端高度 + 物件頂部已滾動的距離
        let concat = Number(clientH) + Number(scrollTop);
        this.scrollBox = concat > Dom ? true : false;
      })
    })
  }

}
