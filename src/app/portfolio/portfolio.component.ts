import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  Scroll(_Event: any) {
    //客戶端高度
    // let clientH = _Event.path[0].scrollingElement.clientHeight;
    //body高度
    // let bodyH = _Event.path[0].scrollingElement.clientHeight;
    //滾動的高度
    let scrollTop = _Event.path[0].scrollingElement.scrollTop;
    this.scrollBox[0] = scrollTop > 3051 ? true : false;
    this.scrollBox[1] = scrollTop > 3361 ? true : false;
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
