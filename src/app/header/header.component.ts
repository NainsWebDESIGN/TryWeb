import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app_header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: boolean = false;
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
  constructor() { }
  MenuEffects() {
    this.menu = !this.menu;
  }
  ngOnInit() {
  }

}
