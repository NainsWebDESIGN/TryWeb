import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '@service/Language.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @ViewChildren("ScrollBox") ScrollAnimate: QueryList<ElementRef>;
  data: any = { education: [], experience: [] };
  scrollBox: boolean = false;
  constructor(private http: HttpClient, public lang: LanguageService) { }

  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data.education = el.Education.education;
      this.data.experience = el.Education.experience;
      document.body.addEventListener('scroll', () => {
        //客戶端高度
        let clientH = Number($(window).height());
        //滾動的高度
        let scrollTop = Number(document.body.scrollTop);
        // 物件位置 + 物件高度的幾成
        let Scroll = this.ScrollAnimate.first.nativeElement;
        let Top = Number(Scroll.offsetParent.offsetTop) + Number(Scroll.offsetParent.offsetParent.offsetTop);
        let Dom = Top + (Number(Scroll.clientHeight) * 0.68);
        // 客戶端高度 + 物件頂部已滾動的距離
        this.scrollBox = (clientH + scrollTop) > Dom ? true : false;
      })
    })
  }

}
