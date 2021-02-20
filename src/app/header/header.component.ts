import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app_header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: boolean = false;
  header: any = [];
  Sticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  Scroll(_Event: any) {
    //客戶端高度
    // let clientH = _Event.path[0].scrollingElement.clientHeight;
    //body高度
    // let bodyH = _Event.path[0].scrollingElement.clientHeight;
    //滾動的高度
    let scrollTop = _Event.path[0].scrollingElement.scrollTop;
    this.Sticky = (scrollTop > 0) ? true : false;
  }
  constructor(private http: HttpClient) { }
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
  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.header = el.header;
    })
  }

}
