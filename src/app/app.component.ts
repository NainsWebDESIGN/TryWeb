import { Component, OnInit, HostListener } from '@angular/core';
import { LanguageService } from '@service/Language.service';
import { ShareDataService } from '@service/ShareData.service';
import { ApiService } from '@service/Api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    LanguageService,
    ShareDataService,
    ApiService
  ]
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  SetWidth(_Event) {
    //客戶端高度
    let clientW = _Event.path[0].documentElement.clientWidth;
    document.documentElement.style.overflowX = clientW < 401 ? 'hidden' : 'scroll';
    console.log(_Event);
  }
  load: boolean = false;
  constructor(public lang: LanguageService) { }
  ngOnInit() {
    document.body.style.height = $(window).height() + 'px';
    addEventListener("orientationchange", () => {
      document.body.style.height = $(window).height() + 'px';
    })
    setTimeout(() => {
      this.load = true;
    }, 1000);
  }
}
