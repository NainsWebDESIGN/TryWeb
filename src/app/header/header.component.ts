import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '@service/Language.service';

@Component({
  selector: 'app_header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: boolean = false;
  header: any = [];
  Lang: boolean = false;
  Sticky: boolean = false;
  constructor(private http: HttpClient, public lang: LanguageService) { }
  MenuEffects(_Boolin: string) {
    switch (_Boolin) {
      case 'false':
        this.menu = false;
        break;
      default:
        this.menu = !this.menu;
        break;
    }
  }
  openLang() {
    this.Lang = !this.Lang;
  }
  ChangeLang(_Lang: string) {
    this.Lang = false;
    this.lang.getLang(_Lang);
    this.MenuEffects('false')
  }
  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.header = el.header;
      document.body.addEventListener('scroll', () => {
        //滾動的高度
        let scrollTop = Number(document.body.scrollTop);
        this.Sticky = (scrollTop > 0) ? true : false;
      })
    })
  }

}
