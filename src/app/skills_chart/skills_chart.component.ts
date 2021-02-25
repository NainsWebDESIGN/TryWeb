import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '@service/Language.service';
import { ShareDataService } from '@service/ShareData.service';

@Component({
  selector: 'app-skills_chart',
  templateUrl: './skills_chart.component.html',
  styleUrls: ['./skills_chart.component.scss']
})
export class Skills_chartComponent implements OnInit {
  @ViewChildren("ScrollBox") ScrollAnimate: QueryList<ElementRef>;
  data: any = { line: [], circle: [] };
  Check: any = false;
  scrollBox: boolean = false;
  constructor(private http: HttpClient, public lang: LanguageService, private share: ShareDataService) { }

  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data.line = el.skills.line;
      this.data.circle = el.skills.circle;
      document.body.addEventListener('scroll', () => {
        //客戶端高度
        let clientH = Number($(window).height());
        //滾動的高度
        let scrollTop = Number(document.body.scrollTop);
        if (this.ScrollAnimate.first.nativeElement) {
          // 物件位置 + 物件高度的幾成
          let Scroll = this.ScrollAnimate.first.nativeElement;
          let Top = Number(Scroll.offsetTop) + Number(Scroll.offsetParent.offsetTop);
          let Dom = Top + (Number(Scroll.clientHeight) * 0.49);
          // 客戶端高度 + 物件頂部已滾動的距離
          this.scrollBox = (clientH + scrollTop) > Dom ? true : false;
          if (this.scrollBox !== this.Check) {
            this.Check = this.scrollBox;
            this.share.changeCircle(this.Check);
          }
        }
      })

    })
    this.share.circle$.subscribe(el => {
      let data = [
        { name: "", value: 0.95, size: 100, fill: { gradient: ["#3bb78f", "#0bab64"] } },
        { name: "1", value: 0.49, size: 100, fill: { gradient: ["#3bb78f", "#0bab64"] } },
        { name: "2", value: 0.86, size: 100, fill: { gradient: ["#3bb78f", "#0bab64"] } },
        { name: "3", value: 0.72, size: 100, fill: { gradient: ["#3bb78f", "#0bab64"] } }
      ]
      if (el) {
        for (let i = 0; i < data.length; i++) {
          $('#circle' + data[i].name).circleProgress({
            value: data[i].value,
            size: data[i].size,
            fill: data[i].fill
          })
        }
      }
    })
  }

}
