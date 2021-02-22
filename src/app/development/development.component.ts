import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  Scroll(_Event: any) {
    //客戶端高度
    // let clientH = _Event.path[0].scrollingElement.clientHeight;
    //body高度
    // let bodyH = _Event.path[0].scrollingElement.clientHeight;
    //滾動的高度
    let scrollTop = _Event.path[0].scrollingElement.scrollTop;
    this.scrollBox[0] = scrollTop > 699 ? true : false;
    this.scrollBox[1] = scrollTop > 1099 ? true : false;
  }
  data: any = [];
  scrollBox: any = [false, false];
  constructor(private http: HttpClient) { }
  move(_Number: number) {
    switch (_Number) {
      case 0:
        return '-200px';
      case 1:
        return '0px';
      case 2:
        return '200px';
    }
  }
  ngOnInit() {
    this.http.get('assets/json/databass.json').subscribe((el: any) => {
      this.data = el.development;
    })
  }

}
