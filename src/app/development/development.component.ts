import { Component, OnInit, HostListener, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {
  @ViewChildren("ScrollBox1") ScrollAnimate1: QueryList<ElementRef>;
  @ViewChildren("ScrollBox2") ScrollAnimate2: QueryList<ElementRef>;

  @HostListener('window:scroll', ['$event'])
  Scroll(_Event: any) {
    //客戶端高度
    let clientH = _Event.path[0].scrollingElement.clientHeight;
    //滾動的高度
    let scrollTop = _Event.path[0].scrollingElement.scrollTop;
    if (this.ScrollAnimate2 && this.ScrollAnimate1) {
      // 物件位置 + 物件高度的幾成
      let Scroll1 = this.ScrollAnimate1.first.nativeElement;
      let Scroll2 = this.ScrollAnimate2.first.nativeElement;
      let Dom1 = Number(Scroll1.offsetTop) + (Number(Scroll1.clientHeight) * 0.49);
      let Dom2 = Number(Scroll2.offsetTop) + (Number(Scroll2.clientHeight) * 0.49);
      // 客戶端高度 + 物件頂部已滾動的距離
      let concat = Number(clientH) + Number(scrollTop);
      this.scrollBox[0] = concat > Dom1 ? true : false;
      this.scrollBox[1] = concat > Dom2 ? true : false;
    }
  }
  data: any = [];
  scrollBox: any = [false, false];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data = el.development;
    })
  }
}
