import { Component, OnInit, HostListener, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
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
      let Top = Number(Scroll.offsetParent.offsetTop) + Number(Scroll.offsetParent.offsetParent.offsetTop);
      let Dom = Top + (Number(Scroll.clientHeight) * 0.68);
      // 客戶端高度 + 物件頂部已滾動的距離
      let concat = Number(clientH) + Number(scrollTop);
      this.scrollBox = concat > Dom ? true : false;
    }
  }
  data: any = { education: [], experience: [] };
  scrollBox: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data.education = el.Education.education;
      this.data.experience = el.Education.experience;
    })
  }

}
