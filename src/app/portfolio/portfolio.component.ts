import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  data: any = { title: [], content: [] };
  header: string = '*';
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
