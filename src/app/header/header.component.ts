import { Component, OnInit } from '@angular/core';
import { ListenService } from '@service/Listen.service'

@Component({
  selector: 'app_header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: boolean = false;
  header: any = [];
  constructor(public scroll: ListenService) { }
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
    this.scroll.DataBass.subscribe((el: any) => {
      this.header = el.header;
    })
  }

}
